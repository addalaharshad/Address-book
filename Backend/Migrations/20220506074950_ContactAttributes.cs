using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace addressBook_BackEnd.Migrations
{
    public partial class ContactAttributes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Email = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Mobile = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    Landline = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Website = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false),
                    Address = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
