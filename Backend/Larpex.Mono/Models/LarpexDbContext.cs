using System;
using System.Collections.Generic;
using Larpex.Mono.Models;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Models;

public partial class LarpexDbContext : DbContext
{
    public LarpexDbContext()
    {
    }

    public LarpexDbContext(DbContextOptions<LarpexDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TblCharacter> TblCharacters { get; set; }

    public virtual DbSet<TblEvent> TblEvents { get; set; }

    public virtual DbSet<TblGame> TblGames { get; set; }

    public virtual DbSet<TblLocation> TblLocations { get; set; }

    public virtual DbSet<TblOrder> TblOrders { get; set; }

    public virtual DbSet<TblParticipant> TblParticipants { get; set; }

    public virtual DbSet<TblPayment> TblPayments { get; set; }

    public virtual DbSet<TblTimeslot> TblTimeslots { get; set; }

    public virtual DbSet<TblUser> TblUsers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("SQL_Polish_CP1250_CI_AS");

        modelBuilder.Entity<TblCharacter>(entity =>
        {
            entity.HasKey(e => e.CharacterId).HasName("PK__tblChara__ADF919BF3802117A");

            entity.ToTable("tblCharacter");

            entity.Property(e => e.CharacterId).HasColumnName("characterId");
            entity.Property(e => e.CharacterClass)
                .HasMaxLength(50)
                .HasColumnName("characterClass");
            entity.Property(e => e.CharacterLore).HasColumnName("characterLore");
            entity.Property(e => e.CharacterName)
                .HasMaxLength(50)
                .HasColumnName("characterName");
            entity.Property(e => e.CharacterRace)
                .HasMaxLength(50)
                .HasColumnName("characterRace");
            entity.Property(e => e.GameId).HasColumnName("gameId");

            entity.HasOne(d => d.Game).WithMany(p => p.TblCharacters)
                .HasForeignKey(d => d.GameId)
                .HasConstraintName("FK__tblCharac__gameI__693CA210");
        });

        modelBuilder.Entity<TblEvent>(entity =>
        {
            entity.HasKey(e => e.EventId).HasName("PK__tblEvent__2DC7BD0935E0EC07");

            entity.ToTable("tblEvent");

            entity.HasIndex(e => e.EventName, "UQ__tblEvent__53C051E00A177E7A").IsUnique();

            entity.Property(e => e.EventId).HasColumnName("eventId");
            entity.Property(e => e.EventDescription).HasColumnName("eventDescription");
            entity.Property(e => e.EventName)
                .HasMaxLength(100)
                .HasColumnName("eventName");
            entity.Property(e => e.EventStatus)
                .HasMaxLength(50)
                .HasColumnName("eventStatus");
            entity.Property(e => e.GameId).HasColumnName("gameId");
            entity.Property(e => e.LocationId).HasColumnName("locationId");
            entity.Property(e => e.OrderId).HasColumnName("orderId");
            entity.Property(e => e.TimeslotId).HasColumnName("timeslotId");

            entity.HasOne(d => d.Game).WithMany(p => p.TblEvents)
                .HasForeignKey(d => d.GameId)
                .HasConstraintName("FK__tblEvent__gameId__74AE54BC");

            entity.HasOne(d => d.Location).WithMany(p => p.TblEvents)
                .HasForeignKey(d => d.LocationId)
                .HasConstraintName("FK__tblEvent__locati__73BA3083");

            entity.HasOne(d => d.Order).WithMany(p => p.TblEvents)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK__tblEvent__orderI__72C60C4A");

            entity.HasOne(d => d.Timeslot).WithMany(p => p.TblEvents)
                .HasForeignKey(d => d.TimeslotId)
                .HasConstraintName("FK__tblEvent__timesl__75A278F5");
        });

        modelBuilder.Entity<TblGame>(entity =>
        {
            entity.HasKey(e => e.GameId).HasName("PK__tblGame__DA90B452DCF910FF");

            entity.ToTable("tblGame");

            entity.HasIndex(e => e.GameName, "UQ__tblGame__897E5298AA4C541C").IsUnique();

            entity.Property(e => e.GameId).HasColumnName("gameId");
            entity.Property(e => e.GameAuthor)
                .HasMaxLength(50)
                .HasColumnName("gameAuthor");
            entity.Property(e => e.GameDescription).HasColumnName("gameDescription");
            entity.Property(e => e.GameDifficulty).HasColumnName("gameDifficulty");
            entity.Property(e => e.GameMaxNumberOfParticipants).HasColumnName("gameMaxNumberOfParticipants");
            entity.Property(e => e.GameName)
                .HasMaxLength(100)
                .HasColumnName("gameName");
            entity.Property(e => e.GameScript).HasColumnName("gameScript");
        });

        modelBuilder.Entity<TblLocation>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__tblLocat__30646B6EEB61DE77");

            entity.ToTable("tblLocation");

            entity.Property(e => e.LocationId).HasColumnName("locationId");
            entity.Property(e => e.LocationAddress)
                .HasMaxLength(100)
                .HasColumnName("locationAddress");
        });

        modelBuilder.Entity<TblOrder>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__tblOrder__0809335D806D5F55");

            entity.ToTable("tblOrder");

            entity.HasIndex(e => e.PaymentId, "UQ__tblOrder__A0D9EFC7AE5E7B39").IsUnique();

            entity.Property(e => e.OrderId).HasColumnName("orderId");
            entity.Property(e => e.OrderAmount)
                .HasColumnType("money")
                .HasColumnName("orderAmount");
            entity.Property(e => e.PaymentId).HasColumnName("paymentId");

            entity.HasOne(d => d.Payment).WithOne(p => p.TblOrder)
                .HasForeignKey<TblOrder>(d => d.PaymentId)
                .HasConstraintName("FK__tblOrder__paymen__6EF57B66");
        });

        modelBuilder.Entity<TblParticipant>(entity =>
        {
            entity.HasKey(e => e.ParticipantId).HasName("PK__tblParti__4EE79210435E2B9D");

            entity.ToTable("tblParticipant");

            entity.HasIndex(e => e.CharacterId, "UQ__tblParti__ADF919BE99D64DB0").IsUnique();

            entity.Property(e => e.ParticipantId).HasColumnName("participantId");
            entity.Property(e => e.CharacterId).HasColumnName("characterId");
            entity.Property(e => e.EventId).HasColumnName("eventId");
            entity.Property(e => e.UserId).HasColumnName("userId");

            entity.HasOne(d => d.Character).WithOne(p => p.TblParticipant)
                .HasForeignKey<TblParticipant>(d => d.CharacterId)
                .HasConstraintName("FK__tblPartic__chara__797309D9");

            entity.HasOne(d => d.Event).WithMany(p => p.TblParticipants)
                .HasForeignKey(d => d.EventId)
                .HasConstraintName("FK__tblPartic__event__7A672E12");

            entity.HasOne(d => d.User).WithMany(p => p.TblParticipants)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__tblPartic__userI__7B5B524B");
        });

        modelBuilder.Entity<TblPayment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PK__tblPayme__A0D9EFC67BAEA7F9");

            entity.ToTable("tblPayment");

            entity.Property(e => e.PaymentId).HasColumnName("paymentId");
            entity.Property(e => e.PaymentAccepted).HasColumnName("paymentAccepted");
        });

        modelBuilder.Entity<TblTimeslot>(entity =>
        {
            entity.HasKey(e => e.TimeslotId).HasName("PK__tblTimes__D32FB9E42D14B129");

            entity.ToTable("tblTimeslot");

            entity.Property(e => e.TimeslotId).HasColumnName("timeslotId");
            entity.Property(e => e.TimeslotDatetime).HasColumnName("timeslotDatetime");
            entity.Property(e => e.TimeslotDuration).HasColumnName("timeslotDuration");
        });

        modelBuilder.Entity<TblUser>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__tblUser__CB9A1CFF32D1A2B2");

            entity.ToTable("tblUser");

            entity.HasIndex(e => e.UserUsername, "UQ__tblUser__BF18322264E51483").IsUnique();

            entity.HasIndex(e => e.UserEmail, "UQ__tblUser__D54ADF55CB76586D").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("userId");
            entity.Property(e => e.UserBirthDay).HasColumnName("userBirthDay");
            entity.Property(e => e.UserEmail)
                .HasMaxLength(100)
                .HasColumnName("userEmail");
            entity.Property(e => e.UserFirstName)
                .HasMaxLength(50)
                .HasColumnName("userFirstName");
            entity.Property(e => e.UserLastName)
                .HasMaxLength(50)
                .HasColumnName("userLastName");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(64)
                .IsFixedLength()
                .HasColumnName("userPassword");
            entity.Property(e => e.UserUsername)
                .HasMaxLength(50)
                .HasColumnName("userUsername");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
