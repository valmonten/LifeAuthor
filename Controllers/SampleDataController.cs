using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lifeauthor.Models;
using Microsoft.EntityFrameworkCore;

namespace lifeauthor.Controllers
{

    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private lifeauthorContext _context;
        public SampleDataController(lifeauthorContext context)
        {
            _context= context;
        }
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public User Usersdata()
        {
            User firstuser = _context.users.Where(User=>User.id == 1).SingleOrDefault();
            return firstuser;
        }

        [HttpGet("[action]")]
        public Note NoteData()
        {
            Note myentries = _context.notes.Where(J=>J.idnotes == 1).SingleOrDefault();
            return myentries;
        }

        [HttpGet("[action]")]
        public Journal JournalData()
        {
            Journal myjournals = _context.journals.Where(a=>a.idjournals == 1).SingleOrDefault();
            return myjournals;
        }
        
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
