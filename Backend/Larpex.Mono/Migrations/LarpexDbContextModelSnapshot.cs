﻿// <auto-generated />
using System;
using Larpex.Mono.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Larpex.Mono.Migrations
{
    [DbContext(typeof(LarpexDbContext))]
    partial class LarpexDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseCollation("SQL_Polish_CP1250_CI_AS")
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Larpex.Mono.Models.TblCharacter", b =>
                {
                    b.Property<int>("CharacterId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("characterId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CharacterId"));

                    b.Property<string>("CharacterClass")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("characterClass");

                    b.Property<string>("CharacterLore")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("characterLore");

                    b.Property<string>("CharacterName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("characterName");

                    b.Property<string>("CharacterRace")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("characterRace");

                    b.Property<int?>("GameId")
                        .HasColumnType("int")
                        .HasColumnName("gameId");

                    b.HasKey("CharacterId")
                        .HasName("PK__tblChara__ADF919BFBA93A770");

                    b.HasIndex("GameId");

                    b.ToTable("tblCharacter", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblEvent", b =>
                {
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("eventId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EventId"));

                    b.Property<string>("EventDescription")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("eventDescription");

                    b.Property<string>("EventIconUrl")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("eventIconUrl");

                    b.Property<string>("EventName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("eventName");

                    b.Property<string>("EventStatus")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("eventStatus");

                    b.Property<int?>("GameId")
                        .HasColumnType("int")
                        .HasColumnName("gameId");

                    b.Property<int?>("LocationId")
                        .HasColumnType("int")
                        .HasColumnName("locationId");

                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("orderId");

                    b.Property<string>("TimeslotId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("timeslotId");

                    b.HasKey("EventId")
                        .HasName("PK__tblEvent__2DC7BD095E532D94");

                    b.HasIndex("GameId");

                    b.HasIndex("LocationId");

                    b.HasIndex("TimeslotId");

                    b.HasIndex(new[] { "OrderId" }, "UQ__tblEvent__0809335C03068277")
                        .IsUnique()
                        .HasFilter("[orderId] IS NOT NULL");

                    b.HasIndex(new[] { "EventName" }, "UQ__tblEvent__53C051E06921271D")
                        .IsUnique();

                    b.ToTable("tblEvent", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblGame", b =>
                {
                    b.Property<int>("GameId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("gameId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GameId"));

                    b.Property<string>("GameAuthor")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("gameAuthor");

                    b.Property<string>("GameDescription")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("gameDescription");

                    b.Property<int?>("GameDifficulty")
                        .HasColumnType("int")
                        .HasColumnName("gameDifficulty");

                    b.Property<int?>("GameMaxNumberOfParticipants")
                        .HasColumnType("int")
                        .HasColumnName("gameMaxNumberOfParticipants");

                    b.Property<string>("GameName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("gameName");

                    b.Property<string>("GameScript")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("gameScript");

                    b.HasKey("GameId")
                        .HasName("PK__tblGame__DA90B45288213714");

                    b.HasIndex(new[] { "GameName" }, "UQ__tblGame__897E5298961F5D6A")
                        .IsUnique();

                    b.ToTable("tblGame", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblImage", b =>
                {
                    b.Property<string>("ImageId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FileExtension")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FilePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("FileSizeInBytes")
                        .HasColumnType("bigint");

                    b.HasKey("ImageId")
                        .HasName("PK__tblImage__0809335D02A37A80");

                    b.ToTable("TblImages");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblLocation", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("locationId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LocationId"));

                    b.Property<string>("LocationAddress")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("locationAddress");

                    b.Property<double>("UserHourPrice")
                        .HasColumnType("float");

                    b.HasKey("LocationId")
                        .HasName("PK__tblLocat__30646B6E30DCE946");

                    b.ToTable("tblLocation", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblOrder", b =>
                {
                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("orderId");

                    b.Property<decimal>("OrderAmount")
                        .HasColumnType("money")
                        .HasColumnName("orderAmount");

                    b.Property<string>("PaymentId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("paymentId");

                    b.HasKey("OrderId")
                        .HasName("PK__tblOrder__0809335D02A37A80");

                    b.HasIndex(new[] { "PaymentId" }, "UQ__tblOrder__A0D9EFC7AE5E7B39")
                        .IsUnique();

                    b.ToTable("tblOrder", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblParticipant", b =>
                {
                    b.Property<int>("ParticipantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("participantId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ParticipantId"));

                    b.Property<int?>("CharacterId")
                        .HasColumnType("int")
                        .HasColumnName("characterId");

                    b.Property<int?>("EventId")
                        .HasColumnType("int")
                        .HasColumnName("eventId");

                    b.Property<int?>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("userId");

                    b.HasKey("ParticipantId")
                        .HasName("PK__tblParti__4EE7921095C5720D");

                    b.HasIndex("CharacterId");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId");

                    b.ToTable("tblParticipant", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblPayment", b =>
                {
                    b.Property<string>("PaymentId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("paymentId");

                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("orderId");

                    b.Property<bool>("PaymentAccepted")
                        .HasColumnType("bit")
                        .HasColumnName("paymentAccepted");

                    b.Property<decimal>("PaymentAmount")
                        .HasColumnType("money")
                        .HasColumnName("paymentAmount");

                    b.Property<string>("PaymentType")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("paymentType");

                    b.Property<int?>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("userId");

                    b.HasKey("PaymentId")
                        .HasName("PK__tblPayme__A0D9EFC6199496B5");

                    b.HasIndex("OrderId");

                    b.HasIndex("UserId");

                    b.ToTable("tblPayment", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblTimeslot", b =>
                {
                    b.Property<string>("TimeslotId")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("timeslotId");

                    b.Property<DateTime>("TimeslotDatetime")
                        .HasColumnType("datetime2")
                        .HasColumnName("timeslotDatetime");

                    b.Property<TimeSpan>("TimeslotDuration")
                        .HasColumnType("time")
                        .HasColumnName("timeslotDuration");

                    b.HasKey("TimeslotId")
                        .HasName("PK__tblTimes__D32FB9E4598A98EC");

                    b.ToTable("tblTimeslot", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblUser", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("userId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<DateTime?>("UserBirthDay")
                        .HasColumnType("datetime2")
                        .HasColumnName("userBirthDay");

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("userEmail");

                    b.Property<string>("UserFirstName")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("userFirstName");

                    b.Property<string>("UserLastName")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("userLastName");

                    b.Property<byte[]>("UserPassword")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("binary(64)")
                        .HasColumnName("userPassword")
                        .IsFixedLength();

                    b.Property<string>("UserUsername")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("userUsername");

                    b.HasKey("UserId")
                        .HasName("PK__tblUser__CB9A1CFF96EDF8DA");

                    b.HasIndex(new[] { "UserUsername" }, "UQ__tblUser__BF183222B9F26C41")
                        .IsUnique();

                    b.HasIndex(new[] { "UserEmail" }, "UQ__tblUser__D54ADF5514235157")
                        .IsUnique();

                    b.ToTable("tblUser", (string)null);
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblCharacter", b =>
                {
                    b.HasOne("Larpex.Mono.Models.TblGame", "Game")
                        .WithMany("TblCharacters")
                        .HasForeignKey("GameId")
                        .HasConstraintName("FK__tblCharac__gameI__0D7A0286");

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblEvent", b =>
                {
                    b.HasOne("Larpex.Mono.Models.TblGame", "Game")
                        .WithMany("TblEvents")
                        .HasForeignKey("GameId")
                        .HasConstraintName("FK__tblEvent__gameId__19DFD96B");

                    b.HasOne("Larpex.Mono.Models.TblLocation", "Location")
                        .WithMany("TblEvents")
                        .HasForeignKey("LocationId")
                        .HasConstraintName("FK__tblEvent__locati__18EBB532");

                    b.HasOne("Larpex.Mono.Models.TblOrder", "Order")
                        .WithOne("TblEvent")
                        .HasForeignKey("Larpex.Mono.Models.TblEvent", "OrderId")
                        .HasConstraintName("FK__tblEvent__orderI__17F790F9");

                    b.HasOne("Larpex.Mono.Models.TblTimeslot", "Timeslot")
                        .WithMany("TblEvents")
                        .HasForeignKey("TimeslotId")
                        .HasConstraintName("FK__tblEvent__timesl__1AD3FDA4");

                    b.Navigation("Game");

                    b.Navigation("Location");

                    b.Navigation("Order");

                    b.Navigation("Timeslot");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblOrder", b =>
                {
                    b.HasOne("Larpex.Mono.Models.TblPayment", "Payment")
                        .WithMany()
                        .HasForeignKey("PaymentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Payment");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblParticipant", b =>
                {
                    b.HasOne("Larpex.Mono.Models.TblCharacter", "Character")
                        .WithMany("TblParticipants")
                        .HasForeignKey("CharacterId")
                        .HasConstraintName("FK__tblPartic__chara__1DB06A4F");

                    b.HasOne("Larpex.Mono.Models.TblEvent", "Event")
                        .WithMany("TblParticipants")
                        .HasForeignKey("EventId")
                        .HasConstraintName("FK__tblPartic__event__1EA48E88");

                    b.HasOne("Larpex.Mono.Models.TblUser", "User")
                        .WithMany("TblParticipants")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK__tblPartic__userI__1F98B2C1");

                    b.Navigation("Character");

                    b.Navigation("Event");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblPayment", b =>
                {
                    b.HasOne("Larpex.Mono.Models.TblOrder", "TblOrder")
                        .WithMany("TblPayments")
                        .HasForeignKey("OrderId")
                        .HasConstraintName("FK__tblPaymen__order__123EB7A3");

                    b.HasOne("Larpex.Mono.Models.TblUser", "User")
                        .WithMany("TblPayments")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK__tblPaymen__userI__1332DBDC");

                    b.Navigation("TblOrder");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblCharacter", b =>
                {
                    b.Navigation("TblParticipants");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblEvent", b =>
                {
                    b.Navigation("TblParticipants");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblGame", b =>
                {
                    b.Navigation("TblCharacters");

                    b.Navigation("TblEvents");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblLocation", b =>
                {
                    b.Navigation("TblEvents");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblOrder", b =>
                {
                    b.Navigation("TblEvent");

                    b.Navigation("TblPayments");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblTimeslot", b =>
                {
                    b.Navigation("TblEvents");
                });

            modelBuilder.Entity("Larpex.Mono.Models.TblUser", b =>
                {
                    b.Navigation("TblParticipants");

                    b.Navigation("TblPayments");
                });
#pragma warning restore 612, 618
        }
    }
}
