using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;




namespace lifeauthor.Models

{

    public class Note : BaseEntity

    {
        [Key]
        public int idnotes { get; set; }
        public string mynotes { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
        [ForeignKey("users_id")]
        public int users_id { get; set; }
        // public User author { get; set; }

        [ForeignKey("calendar_dateId")]
        public int calendar_dateId { get; set; }
        // public Calendar calendar { get; set; }


        

    }
}