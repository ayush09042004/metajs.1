/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const cars=[];
function mintNFT (Car_no,_price,engine_no,_name) {

const specifications ={
    "carno":Car_no,
    "price":_price,
    "engine":engine_no,
    "name":_name

}
cars.push(specifications);
console.log("minted:"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<cars.length;i++){
        console.log("\ncar no is:\t\t"+ cars[i].carno);
        console.log("car price is:\t"+ cars[i].price);
        console.log("cars engine is:\t"+ cars[i].engine);
        console.log("cars name is:\t"+ cars[i].name);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total no of nfts are:"+cars.length);
}

mintNFT("1","$3 million ","W16","Buggati");
mintNFT("2","$45000","V12","Rolls Royce");
mintNFT("3","$517770","V12","lamborghini");
mintNFT("4","$625000","V8","ferrari");
listNFTs();
getTotalSupply();

