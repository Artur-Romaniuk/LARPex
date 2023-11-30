using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Larpex.Mono.Migrations
{
    /// <inheritdoc />
    public partial class rebase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblGame",
                columns: table => new
                {
                    gameId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    gameName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    gameAuthor = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    gameDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    gameScript = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    gameDifficulty = table.Column<int>(type: "int", nullable: true),
                    gameMaxNumberOfParticipants = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblGame__DA90B45288213714", x => x.gameId);
                });

            migrationBuilder.CreateTable(
                name: "TblImages",
                columns: table => new
                {
                    ImageId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileExtension = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileSizeInBytes = table.Column<long>(type: "bigint", nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblImage__0809335D02A37A80", x => x.ImageId);
                });

            migrationBuilder.CreateTable(
                name: "tblLocation",
                columns: table => new
                {
                    locationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    locationAddress = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    UserHourPrice = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblLocat__30646B6E30DCE946", x => x.locationId);
                });

            migrationBuilder.CreateTable(
                name: "tblTimeslot",
                columns: table => new
                {
                    timeslotId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    timeslotDatetime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    timeslotDuration = table.Column<TimeSpan>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblTimes__D32FB9E4598A98EC", x => x.timeslotId);
                });

            migrationBuilder.CreateTable(
                name: "tblUser",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userUsername = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    userPassword = table.Column<byte[]>(type: "binary(64)", fixedLength: true, maxLength: 64, nullable: false),
                    userEmail = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    userFirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    userLastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    userBirthDay = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblUser__CB9A1CFF96EDF8DA", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "tblCharacter",
                columns: table => new
                {
                    characterId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    characterName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    characterClass = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    characterRace = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    characterLore = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    gameId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblChara__ADF919BFBA93A770", x => x.characterId);
                    table.ForeignKey(
                        name: "FK__tblCharac__gameI__0D7A0286",
                        column: x => x.gameId,
                        principalTable: "tblGame",
                        principalColumn: "gameId");
                });

            migrationBuilder.CreateTable(
                name: "tblEvent",
                columns: table => new
                {
                    eventId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    eventName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    eventStatus = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    eventDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    eventIconUrl = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    orderId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    locationId = table.Column<int>(type: "int", nullable: true),
                    gameId = table.Column<int>(type: "int", nullable: true),
                    timeslotId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblEvent__2DC7BD095E532D94", x => x.eventId);
                    table.ForeignKey(
                        name: "FK__tblEvent__gameId__19DFD96B",
                        column: x => x.gameId,
                        principalTable: "tblGame",
                        principalColumn: "gameId");
                    table.ForeignKey(
                        name: "FK__tblEvent__locati__18EBB532",
                        column: x => x.locationId,
                        principalTable: "tblLocation",
                        principalColumn: "locationId");
                    table.ForeignKey(
                        name: "FK__tblEvent__timesl__1AD3FDA4",
                        column: x => x.timeslotId,
                        principalTable: "tblTimeslot",
                        principalColumn: "timeslotId");
                });

            migrationBuilder.CreateTable(
                name: "tblParticipant",
                columns: table => new
                {
                    participantId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    characterId = table.Column<int>(type: "int", nullable: true),
                    eventId = table.Column<int>(type: "int", nullable: true),
                    userId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblParti__4EE7921095C5720D", x => x.participantId);
                    table.ForeignKey(
                        name: "FK__tblPartic__chara__1DB06A4F",
                        column: x => x.characterId,
                        principalTable: "tblCharacter",
                        principalColumn: "characterId");
                    table.ForeignKey(
                        name: "FK__tblPartic__event__1EA48E88",
                        column: x => x.eventId,
                        principalTable: "tblEvent",
                        principalColumn: "eventId");
                    table.ForeignKey(
                        name: "FK__tblPartic__userI__1F98B2C1",
                        column: x => x.userId,
                        principalTable: "tblUser",
                        principalColumn: "userId");
                });

            migrationBuilder.CreateTable(
                name: "tblOrder",
                columns: table => new
                {
                    orderId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    orderAmount = table.Column<decimal>(type: "money", nullable: false),
                    paymentId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblOrder__0809335D02A37A80", x => x.orderId);
                });

            migrationBuilder.CreateTable(
                name: "tblPayment",
                columns: table => new
                {
                    paymentId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    paymentAccepted = table.Column<bool>(type: "bit", nullable: false),
                    paymentAmount = table.Column<decimal>(type: "money", nullable: false),
                    paymentType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    orderId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    userId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__tblPayme__A0D9EFC6199496B5", x => x.paymentId);
                    table.ForeignKey(
                        name: "FK__tblPaymen__order__123EB7A3",
                        column: x => x.orderId,
                        principalTable: "tblOrder",
                        principalColumn: "orderId");
                    table.ForeignKey(
                        name: "FK__tblPaymen__userI__1332DBDC",
                        column: x => x.userId,
                        principalTable: "tblUser",
                        principalColumn: "userId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblCharacter_gameId",
                table: "tblCharacter",
                column: "gameId");

            migrationBuilder.CreateIndex(
                name: "IX_tblEvent_gameId",
                table: "tblEvent",
                column: "gameId");

            migrationBuilder.CreateIndex(
                name: "IX_tblEvent_locationId",
                table: "tblEvent",
                column: "locationId");

            migrationBuilder.CreateIndex(
                name: "IX_tblEvent_timeslotId",
                table: "tblEvent",
                column: "timeslotId");

            migrationBuilder.CreateIndex(
                name: "UQ__tblEvent__0809335C03068277",
                table: "tblEvent",
                column: "orderId",
                unique: true,
                filter: "[orderId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UQ__tblEvent__53C051E06921271D",
                table: "tblEvent",
                column: "eventName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ__tblGame__897E5298961F5D6A",
                table: "tblGame",
                column: "gameName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ__tblOrder__A0D9EFC7AE5E7B39",
                table: "tblOrder",
                column: "paymentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblParticipant_characterId",
                table: "tblParticipant",
                column: "characterId");

            migrationBuilder.CreateIndex(
                name: "IX_tblParticipant_eventId",
                table: "tblParticipant",
                column: "eventId");

            migrationBuilder.CreateIndex(
                name: "IX_tblParticipant_userId",
                table: "tblParticipant",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_tblPayment_orderId",
                table: "tblPayment",
                column: "orderId");

            migrationBuilder.CreateIndex(
                name: "IX_tblPayment_userId",
                table: "tblPayment",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "UQ__tblUser__BF183222B9F26C41",
                table: "tblUser",
                column: "userUsername",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ__tblUser__D54ADF5514235157",
                table: "tblUser",
                column: "userEmail",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK__tblEvent__orderI__17F790F9",
                table: "tblEvent",
                column: "orderId",
                principalTable: "tblOrder",
                principalColumn: "orderId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrder_tblPayment_paymentId",
                table: "tblOrder",
                column: "paymentId",
                principalTable: "tblPayment",
                principalColumn: "paymentId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__tblPaymen__order__123EB7A3",
                table: "tblPayment");

            migrationBuilder.DropTable(
                name: "TblImages");

            migrationBuilder.DropTable(
                name: "tblParticipant");

            migrationBuilder.DropTable(
                name: "tblCharacter");

            migrationBuilder.DropTable(
                name: "tblEvent");

            migrationBuilder.DropTable(
                name: "tblGame");

            migrationBuilder.DropTable(
                name: "tblLocation");

            migrationBuilder.DropTable(
                name: "tblTimeslot");

            migrationBuilder.DropTable(
                name: "tblOrder");

            migrationBuilder.DropTable(
                name: "tblPayment");

            migrationBuilder.DropTable(
                name: "tblUser");
        }
    }
}
