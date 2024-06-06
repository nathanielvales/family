var images = ["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547115273i/41155075._UY630_SR1200,630_.jpg", "https://cdn.pixabay.com/photo/2016/04/25/07/49/man-1351346_960_720.png", "https://png.pngtree.com/png-clipart/20230502/original/pngtree-woman-cartoon-character-png-image_9131972.png" , "https://in.images.search.yahoo.com/images/view;_ylt=Awrx_evae2Fm6_EG6g69HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzZjMDFiYzYyZDM1YTAzMGE3YjRkYTBkZDI5MjgwNWRiBGdwb3MDMjQ0BGl0A2Jpbmc-?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcartoon%2Bimage%2Bof%2Bwoman%26ei%3DUTF-8%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26nost%3D1%26tab%3Dorganic%26ri%3D244&w=626&h=626&imgurl=img.freepik.com%2Fpremium-photo%2Fcartoon-woman_81048-35785.jpg&rurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fcartoon-woman_53743096.htm&size=45.8KB&p=cartoon+image+of+woman&oid=6c01bc62d35a030a7b4da0dd292805db&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Premium+Photo+%7C+A+cartoon+of+a+woman&b=241&ni=140&no=244&ts=&tab=organic&sigr=4obT573e0swZ&sigb=DE70W54VGxed&sigi=eVLlPqF.YzKM&sigt=rKwq6XopZcRE&.crumb=NHTypa99me2&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211IN826G0", "https://i.pinimg.com/originals/08/a8/4d/08a84d71da5c3491cf49b49c96e743e7.png", "https://img.freepik.com/premium-photo/cartoon-boy_604472-1045.jpg", "https://i.etsystatic.com/10924369/r/il/1f3f89/751945639/il_1140xN.751945639_x7ca.jpg", "https://i.pinimg.com/736x/a6/c6/71/a6c671ab8318dd28ce50136e3a0449ec.jpg"];
var names = ["The Fmaily Book","Valentino Vales", "Edwiz Vales", "Joanna Vales", "David Vales", "Whiskey Vales", "Nathaniel Vales"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = [images];

    var updatedName = [names];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
