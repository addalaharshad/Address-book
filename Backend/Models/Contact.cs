using System;
using System.Collections.Generic;

namespace addressBook_BackEnd.Models
{
    public partial class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Landline { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
    }
}
