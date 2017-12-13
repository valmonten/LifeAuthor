using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace lifeauthor.Models

{

    public class Agenda : BaseEntity

    {
        [Key]

        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string category { get; set; }
        public int importance { get; set; }
        public int urgency { get; set; }
        public DateTime start { get; set; }
        public DateTime end { get; set; }
        [ForeignKey("users_id")]
        public int users_id { get; set; }
        public User creator { get; set; }

        [ForeignKey("calendar_dateId")]
        public int calendar_dateId { get; set; }
        public Calendar calendar { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
        

    }

}