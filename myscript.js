class Books{
    constructor(book_cover,book_title,book_author,book_genre){
        this.book_cover = book_cover;
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_genre = book_genre;
    }
    }
    
    var firstBook = new Books("<img src='images/kitap.jpg' style='width:200px'>","The Witcher: Kirlangic Kulesi","Andrzej Sapkowski","Fantasy");
    var secondBook = new Books("<img src='images/kitap2.jpg' style='width:200px'>","1984","George Orwell","Novel");
    var thirdBook = new Books("<img src='images/kitap3.jpg' style='width:200px'>","Twelve Rules for Life","Jordan Peterson","Self Improvement");
    var fourthBook = new Books("<img src='images/kitap4.jpg' style='width:200px'>","Atomic Habits","James Clear","Self Improvement");
    var fifthBook = new Books("<img src='images/kitap5.jpg' style='width:200px'>","The Great Gatsby","Fitzgerald","Novel");
    var sixthBook = new Books("<img src='images/kitap6.jpg' style='width:200px'>","Darth Bane: The Path of Destruction","Drew Karpyshyn","Fantasy");
    var seventhBook = new Books("<img src='images/kitap7.jpg' style='width:200px'>","Rich Dad Poor Dad","Robert T Kiyosaki","Self Improvement");
    var eighthBook = new Books("<img src='images/kitap8.jpg' style='width:200px'>","Don Kisot","Cervantes","Novel");
    var ninthBook = new Books("<img src='images/kitap9.jpg' style='width:200px'>","Game of Thrones","George R.R. Martin","Fantasy");
    
    //These variables below will be for Amount of Books, Amount of Total Books, Total Cart Count, Total Pricing, and individual pricing.
    var totalBooks = 0, totalPricing = 0, cartCount = 0;
    
    //The variables below will be used to display and calculate depending on the amount of books.
    var firstBookCount = 0, secondBookCount = 0, thirdBookCount = 0, fourthBookCount = 0, fifthBookCount = 0, sixthBookCount = 0, seventhBookCount = 0;
    var eighthBookCount = 0, ninthBookCount = 0;
    
    //The variables below will be used to display and calculate depending on the total price.
    var firstBookPrice = 20, secondBookPrice = 15, thirdBookPrice = 30, fourthBookPrice = 25, fifthBookPrice = 10 , sixthBookPrice = 12, seventhBookPrice = 20;
    var eighthBookPrice = 10, ninthBookPrice = 40;
    
    //These variables below will be for the ID's of Books, locations of Books which will be used to place them into spans accordingly.
    var bookID=0; 
    var bookLocation=0;

    function addToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        if(bookLocation==1){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }
        
        else if(bookLocation==2){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==3){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==4){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==5){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==6){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==7){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==8){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }

        else if(bookLocation==9){
        
            
            firstBookCount++;
            totalBooks+=firstBookCount;
            totalPricing+=firstBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  firstBook.book_cover + "<br>" + "Title: " + firstBook.book_title + "<br>" + "Author: " + firstBook.book_author + "<br>" + "Price: " + firstBookPrice;;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + firstBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        
        }
        
        showButtons();
    }

    function addSecondToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        
        if(bookLocation==1){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==2){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==3){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==8){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==9){
            secondBookCount++;
            totalBooks+=secondBookCount;
            totalPricing+=secondBookPrice;
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  secondBook.book_cover + "<br>" + "Title: " + secondBook.book_title + "<br>" + "Author: " + secondBook.book_author + "<br>" + "Price: " + secondBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        showButtons();
        
    }

    function addThirdToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;

        if(bookLocation==1){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==3){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==8){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==9){
            thirdBookCount++;
            totalBooks+=thirdBookCount;
            totalPricing+=thirdBookPrice;

            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  thirdBook.book_cover + "<br>" + "Title: " + thirdBook.book_title + "<br>" + "Author: " + thirdBook.book_author + "<br>" + "Price: " + thirdBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        showButtons();
    }

    function addFourthToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;

        if(bookLocation==1){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==3){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==8){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==9){
            fourthBookCount++;
            totalBooks+=fourthBookCount;
            totalPricing+=fourthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  fourthBook.book_cover + "<br>" + "Title: " + fourthBook.book_title + "<br>" + "Author: " + fourthBook.book_author + "<br>" + "Price: " + fourthBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        showButtons();
    }

    function addFifthToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        
        if(bookLocation==1){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==3){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        
        else if(bookLocation==7){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==8){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==9){
            fifthBookCount++;
            totalBooks+=fifthBookCount;
            totalPricing+=fifthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  fifthBook.book_cover + "<br>" + "Title: " + fifthBook.book_title + "<br>" + "Author: " + fifthBook.book_author + "<br>" + "Price: " + fifthBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        showButtons();
    }

    function addSixthToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        
        if(bookLocation==1){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==3){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==8){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==9){
            sixthBookCount++;
            totalBooks+=sixthBookCount;
            totalPricing+=sixthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  sixthBook.book_cover + "<br>" + "Title: " + sixthBook.book_title + "<br>" + "Author: " + sixthBook.book_author + "<br>" + "Price: " + sixthBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        showButtons();
    }

    function addSeventhToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        
        if(bookLocation==1){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "<br>" + "Price: " + seventhBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==3){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "<br>" + "Price: " + seventhBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==8){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==9){
            seventhBookCount++;
            totalBooks+=seventhBookCount;
            totalPricing+=seventhBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  seventhBook.book_cover + "<br>" + "Title: " + seventhBook.book_title + "<br>" + "Author: " + seventhBook.book_author + "Price: " + seventhBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        showButtons();
    }

    function addEighthToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        
        if(bookLocation==1){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("secondProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("secondProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==3){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==8){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==9){
            eighthBookCount++;
            totalBooks+=eighthBookCount;
            totalPricing+=eighthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  eighthBook.book_cover + "<br>" + "Title: " + eighthBook.book_title + "<br>" + "Author: " + eighthBook.book_author + "Price: " + eighthBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        showButtons();
    }

    function addNinthToCart(){
        warnUser();
        cartCount++;
        bookID++;
        bookLocation++;
        
        if(bookLocation==1){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("firstProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==2){
            
                ninthBookCount++;
                totalBooks+=ninthBookCount;
                totalPricing+=ninthBookPrice;
                
                document.getElementById("cart_area").innerHTML = cartCount;
                document.getElementById("secondProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
                document.getElementById("secondProductAmount").innerHTML = "Amount: " + ninthBookCount;
                document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
            
        }

        else if(bookLocation==3){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("thirdProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("thirdProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==4){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fourthProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("fourthProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==5){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("fifthProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("fifthProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==6){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("sixthProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("sixthProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==7){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("seventhProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("seventhProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==8){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("eighthProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("eighthProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }

        else if(bookLocation==9){
            ninthBookCount++;
            totalBooks+=ninthBookCount;
            totalPricing+=ninthBookPrice;
            
            document.getElementById("cart_area").innerHTML = cartCount;
            document.getElementById("ninthProduct").innerHTML =  ninthBook.book_cover + "<br>" + "Title: " + ninthBook.book_title + "<br>" + "Author: " + ninthBook.book_author + "<br>" + "Price: " + ninthBookPrice;
            document.getElementById("ninthProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        showButtons();
    }

 

    //The function(s) below will be used to hide or reveal buttons under the product
    function showButtons(){

        if(bookLocation==1){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("firstProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";
        }
        else if(bookLocation==2){
            document.getElementById("totals_area").style.display="block";
            document.getElementById("secondProductButtons").style.display="block";
            document.getElementById("bottom_area").style.display="block";
    }
    else if(bookLocation==3){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("thirdProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";
    }
    else if(bookLocation==4){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("fourthProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";    
    }
    else if(bookLocation==5){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("fifthProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";    
    }
    else if(bookLocation==6){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("sixthProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";    
    }
    else if(bookLocation==7){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("seventhProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";  
    }
    else if(bookLocation==8){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("eighthProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";
    }
    else if(bookLocation==9){
        document.getElementById("totals_area").style.display="block";
        document.getElementById("ninthProductButtons").style.display="block";
        document.getElementById("bottom_area").style.display="block";
    }
}

    function hideButtons(){

        document.getElementById("uw_warning").style.display="none";

        if(bookLocation==0){
        document.getElementById("totals_area").style.display="none";
        document.getElementById("firstProductButtons").style.display="none";
        document.getElementById("bottom_area").style.display="none";
        document.getElementById("secondProductButtons").style.display="none";
        document.getElementById("thirdProductButtons").style.display="none";
        document.getElementById("fourthProductButtons").style.display="none";
        document.getElementById("fifthProductButtons").style.display="none";
        document.getElementById("sixthProductButtons").style.display="none";
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==1){
        document.getElementById("secondProductButtons").style.display="none";
        document.getElementById("thirdProductButtons").style.display="none";
        document.getElementById("fourthProductButtons").style.display="none";
        document.getElementById("fifthProductButtons").style.display="none";
        document.getElementById("sixthProductButtons").style.display="none";
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==2){
        document.getElementById("thirdProductButtons").style.display="none";
        document.getElementById("fourthProductButtons").style.display="none";
        document.getElementById("fifthProductButtons").style.display="none";
        document.getElementById("sixthProductButtons").style.display="none";
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==3){
        document.getElementById("fourthProductButtons").style.display="none";
        document.getElementById("fifthProductButtons").style.display="none";
        document.getElementById("sixthProductButtons").style.display="none";
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==4){
        document.getElementById("fifthProductButtons").style.display="none";
        document.getElementById("sixthProductButtons").style.display="none";
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==5){
        document.getElementById("sixthProductButtons").style.display="none";
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==6){
        document.getElementById("seventhProductButtons").style.display="none";
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==7){
        document.getElementById("eighthProductButtons").style.display="none";
        document.getElementById("ninthProductButtons").style.display="none";
    }
    else if(bookLocation==8){
        document.getElementById("ninthProductButtons").style.display="none";
    }
}


//The function(s) below will be used to decrease, remove, or increase book amounts and prices

    function decreaseBook(){

        cartCount--;
        document.getElementById("cart_area").innerHTML = cartCount;

        if(bookLocation==1 && bookID==1){
         firstBookCount--;
         totalBooks = firstBookCount;
         totalPricing -= firstBookPrice;
         document.getElementById("firstProductAmount").innerHTML = "Amount: " + firstBookCount;
         document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
        }
        else if(bookLocation==1 && bookID==2){
            secondBookCount--;
            totalBooks-=secondBookCount;
            totalPricing-=secondBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + secondBookCount;
            document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==3){
            thirdBookCount--;
            totalBooks-=thirdBookCount;
            totalPricing-=thirdBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + thirdBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==4){
            fourthBookCount--;
            totalBooks-=fourthBookCount;
            totalPricing-=fourthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + fourthBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==5){
            fifthBookCount--;
            totalBooks-=fifthBookCount;
            totalPricing-=fifthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + fifthBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==6){
            sixthBookCount--;
            totalBooks-=sixthBookCount;
            totalPricing-=sixthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + sixthBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==7){
            seventhBookCount--;
            totalBooks-=seventhBookCount;
            totalPricing-=seventhBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + seventhBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==8){
            eighthBookCount--;
            totalBooks-=eighthBookCount;
            totalPricing-=eighthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + eighthBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
        else if(bookLocation==1 && bookID==9){
            ninthBookCount--;
            totalBooks-=ninthBookCount;
            totalPricing-=ninthBookPrice;
            document.getElementById("firstProductAmount").innerHTML = "Amount: " + ninthBookCount;
            document.getElementById("totals_area").innerHTML = "Amount: " + totalPricing + "<br>" + "Total Amount: " + totalBooks;
        }
    
}

function removeBook(){
if(firstOne){
    cartCount = 0;
    totalPricing-=firstBookPrice*firstBookCount;
    totalBooks-=firstBookCount;
    firstBookCount = 0;
    
    document.getElementById("firstProduct").innerHTML =  "";
    document.getElementById("firstProductAmount").innerHTML = "";
    document.getElementById("totals_area").innerHTML = "";
    document.getElementById("cart_area").innerHTML="";
}

bookLocation--;
bookID--;

}

function increaseBook(){

cartCount++;
document.getElementById("cart_area").innerHTML = cartCount;

if(bookLocation==1 && bookID==1){
    firstBookCount++;
    totalBooks = firstBookCount;
    totalPricing += firstBookPrice;
    document.getElementById("firstProductAmount").innerHTML = "Amount: " + firstBookCount;
    document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
}
else if(bookLocation==1 && bookID==2){
    secondBookCount++;
    totalBooks = secondBookCount;
    totalPricing += secondBookPrice;
    document.getElementById("firstProductAmount").innerHTML = "Amount: " + secondBookCount;
    document.getElementById("totals_area").innerHTML = "Total Price: " + totalPricing + "<br>" + "Total Amount: " + totalBooks; 
}
}

// These functions will filter out the books.
function filterAll(){
    if(filterNovel && filterFantasy && filterSelfImp){
    document.getElementById("selfimp").style.display="block";
    document.getElementById("selfimp2").style.display="block";
    document.getElementById("selfimp3").style.display="block";
    document.getElementById("novel").style.display="block";
    document.getElementById("novel2").style.display="block";
    document.getElementById("novel3").style.display="block";
    document.getElementById("fantasy").style.display="block";
    document.getElementById("fantasy2").style.display="block";
    document.getElementById("fantasy3").style.display="block";
}
}

function filterNovel(){
    document.getElementById("selfimp").style.display="none";
    document.getElementById("selfimp2").style.display="none";
    document.getElementById("selfimp3").style.display="none";
    document.getElementById("fantasy").style.display="none";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";
}

function filterSelfImp(){
    document.getElementById("fantasy").style.display="none";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";

    document.getElementById("novel").style.display="none";
    document.getElementById("novel2").style.display="none";
    document.getElementById("novel3").style.display="none";
}

function filterFantasy(){
    document.getElementById("selfimp").style.display="none";
    document.getElementById("selfimp2").style.display="none";
    document.getElementById("selfimp3").style.display="none";
    document.getElementById("novel").style.display="none";
    document.getElementById("novel2").style.display="none";
    document.getElementById("novel3").style.display="none";
}

// This function will be used for books to get displayed based on their names
function searchBook(){

    var searchedBook = document.getElementById("searchForBooks").value;
    var firstBook = "the witcher";
    var secondBook = "1984";
    var thirdBook = "Hayat Icin 12 Kural";
    var fourthBook = "Atomik Aliskanliklar";
    var fifthBook = "Muhtesem Gatsby";
    var sixthBook = "Darth Bane: Yikim Yolu";
    var seventhBook = "Zengin Baba Yoksul Baba";
    var eighthBook = "Don Kisot";
    var ninthBook = "Taht Oyunlari";

    if(searchedBook == firstBook){
    document.getElementById("selfimp").style.display="none";
    document.getElementById("selfimp2").style.display="none";
    document.getElementById("selfimp3").style.display="none";

    document.getElementById("novel").style.display="none";
    document.getElementById("novel2").style.display="none";
    document.getElementById("novel3").style.display="none";

    document.getElementById("fantasy").style.display="block";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";

    }

    else if(searchedBook == secondBook){
    document.getElementById("selfimp").style.display="none";
    document.getElementById("selfimp2").style.display="none";
    document.getElementById("selfimp3").style.display="none";

    document.getElementById("fantasy").style.display="none";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";

    document.getElementById("novel").style.display="block";
    document.getElementById("novel2").style.display="none";
    document.getElementById("novel3").style.display="none";

    }

    else if(searchedBook == thirdBook){
    document.getElementById("selfimp").style.display="block";
    document.getElementById("selfimp2").style.display="none";
    document.getElementById("selfimp3").style.display="none";

    document.getElementById("fantasy").style.display="none";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";

    document.getElementById("novel").style.display="none";
    document.getElementById("novel2").style.display="none";
    document.getElementById("novel3").style.display="none";
    }

   else if(searchedBook == fourthBook){
    
    document.getElementById("selfimp").style.display="none";
    document.getElementById("selfimp2").style.display="block";
    document.getElementById("selfimp3").style.display="none";

    document.getElementById("fantasy").style.display="none";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";

    document.getElementById("novel").style.display="none";
    document.getElementById("novel2").style.display="none";
    document.getElementById("novel3").style.display="none";
    }

    else if(searchedBook== fifthBook){
    document.getElementById("selfimp").style.display="none";
    document.getElementById("selfimp2").style.display="none";
    document.getElementById("selfimp3").style.display="none";

    document.getElementById("fantasy").style.display="none";
    document.getElementById("fantasy2").style.display="none";
    document.getElementById("fantasy3").style.display="none";

    document.getElementById("novel").style.display="none";
    document.getElementById("novel2").style.display="block";
    document.getElementById("novel3").style.display="none";
    }

    else if(searchedBook==sixthBook){
        document.getElementById("selfimp").style.display="none";
        document.getElementById("selfimp2").style.display="none";
        document.getElementById("selfimp3").style.display="none";

        document.getElementById("novel").style.display="none";
        document.getElementById("novel2").style.display="none";
        document.getElementById("novel3").style.display="none";

        document.getElementById("fantasy").style.display="none";
        document.getElementById("fantasy2").style.display="block";
        document.getElementById("fantasy3").style.display="none";
        
    }

    else if(searchedBook==seventhBook){
        document.getElementById("selfimp").style.display="none";
        document.getElementById("selfimp2").style.display="none";
        document.getElementById("selfimp3").style.display="block";
        
        document.getElementById("novel").style.display="none";
        document.getElementById("novel2").style.display="none";
        document.getElementById("novel3").style.display="none";

        document.getElementById("fantasy").style.display="none";
        document.getElementById("fantasy2").style.display="none";
        document.getElementById("fantasy3").style.display="none";
    }

    else if(searchedBook==eighthBook){
        document.getElementById("selfimp").style.display="none";
        document.getElementById("selfimp2").style.display="none";
        document.getElementById("selfimp3").style.display="none";
        
        document.getElementById("novel").style.display="none";
        document.getElementById("novel2").style.display="none";
        document.getElementById("novel3").style.display="block";

        document.getElementById("fantasy").style.display="none";
        document.getElementById("fantasy2").style.display="none";
        document.getElementById("fantasy3").style.display="none";
    }

    else if(searchedBook == ninthBook){
        document.getElementById("selfimp").style.display="none";
        document.getElementById("selfimp2").style.display="none";
        document.getElementById("selfimp3").style.display="none";
        
        document.getElementById("novel").style.display="none";
        document.getElementById("novel2").style.display="none";
        document.getElementById("novel3").style.display="none";

        document.getElementById("fantasy").style.display="none";
        document.getElementById("fantasy2").style.display="none";
        document.getElementById("fantasy3").style.display="block";
    }



}

// The function below will warn the user if they successfully added a product to the cart.
function warnUser(){
document.getElementById("uw_warning").style.display="block";
}
// The function below will close the warning when user clicks on the button.
function stopWarning(){
    document.getElementById("uw_warning").style.display="none";
}