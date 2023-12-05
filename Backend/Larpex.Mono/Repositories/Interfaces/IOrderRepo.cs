using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces
{
    public interface IOrderRepo
    {
        public Task<OrderDto> getOrder(string id);
    }
}
