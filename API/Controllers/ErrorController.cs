namespace API.Controllers
{
    using API.Errors;
    using Microsoft.AspNetCore.Mvc;

    [Route("errors/{code}")]
    public class ErrorController : BaseAPIController
    {
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}
