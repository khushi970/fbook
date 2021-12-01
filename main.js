var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Ritesh Khandelwal", "Shalini Khandelwal", "Bhumika Khandelwal", "Khushi Khandelwal"];
var i = 0;
function update()
{
    i++;
var number_of_family_members = 4
if(i > number_of_family_members) 
{
     i = 0; 
}
 var updatedImage = images[i]; 
 var updatedName = names[i]; 
document.getElementById("family_img").src = updatedImage;
document.getElementById("family_members_names").innerHTML = updatedName;
}




