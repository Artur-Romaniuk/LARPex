using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces;

public interface IUserRepo
{
    public Task<UserDTO> GetUser(int id);
    public Task<IEnumerable<UserDTO>> GetUsers();
    public Task<int> CreateUser(UserDTO user);
}
