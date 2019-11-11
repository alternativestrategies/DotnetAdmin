namespace products.Models
{
    public class Products
    {
        //contains all of the elements of my table
        public int Id {get; set;}
        public string product_name {get; set;}
        public string product_description {get; set;}
        public string category {get; set;}
        public string product_img {get; set;}
        // public int price_id {get; set;}
    }
}