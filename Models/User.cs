using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace lifeauthor.Models

{

    public class User : BaseEntity

    {
        [Key]
        public int id { get; set; }
        public string email { get; set; }
        public string name { get; set; }
        public string password { get; set; }
        // public virtual List<Journal> myjournals { get; set; }
       

    }

}