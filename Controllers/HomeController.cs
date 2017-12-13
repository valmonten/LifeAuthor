using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lifeauthor.Models;

namespace lifeauthor.Controllers
{
    public class HomeController : Controller
    {
        private lifeauthorContext _context;
        public HomeController (lifeauthorContext context)
        {
            _context = context;
            

        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
