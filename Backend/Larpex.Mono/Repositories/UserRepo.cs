using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories;

public class UserRepo : IUserRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    public UserRepo(
        LarpexDbContext context, 
        IMapper mapper
        )
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<UserDTO> GetUser(int id)
    {
        var dbUser = await _context.TblUsers.FirstOrDefaultAsync(u => u.UserId == id);
        if (dbUser == null)
        {
            throw new ArgumentNullException($"User with provided id does not exist, id: {id}");
        }
        return _mapper.Map<UserDTO>(dbUser);
    }

    public async Task<IEnumerable<UserDTO>> GetUsers()
    {
        var userList = await _context.TblUsers.ToListAsync();
        if (userList == null || userList.Count == 0)
        {
            throw new ArgumentNullException("No users in database or failed to fetch them, perhaps consider using carrot");
        }
        var users = new List<UserDTO>();
        foreach ( var user in userList )
        {
            users.Add(_mapper.Map<UserDTO>(user));
        }

        return users;
    }
}
