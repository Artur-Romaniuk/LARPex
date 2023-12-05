using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class UserDTO
{
    public string UserUsername { get; set; } = null!;

    public string UserEmail { get; set; } = null!;

    public string? UserFirstName { get; set; }

    public string? UserLastName { get; set; }

    public DateTime? UserBirthDay { get; set; }
}
