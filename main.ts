import { countReset } from "console";
import inquirer from "inquirer";

let maxpoints = 10
let points: number = 0;

// --------------------   Easy Questions

let question1: string = `Which planet is known as the "Red Planet"?`;                                                     //  b
let question2: string = `Which of the following animals is known for its distinctive sound "oink oink"?`                 //  a
let question3: string = `What is the capital city of France?`                                                           //  a
let question4: string = `Which Disney character's original name was "Mortimer Mouse"?`                                 //  b
let question5: string = `What is the largest living species of lizard?`                                                 //  a
let question6: string = `Which of the following fruits is often red or green when it's ripe?`                           //  d 
let question7: string = `Who is the main character in the book "The Wizard of Oz"?`                                     //  a
let question8: string = `What is the smallest country in the world, both in terms of population and land area?`         //  a
let question9: string = `Which of the following musical instruments is often associated with the country of Scotland?`  //  d
let question10: string = `What is the chemical symbol for gold?`                                                        //  a

// --------------------   Medium Questions

let question01: string = `What is the purpose of the "git add" command in Git version control?`                                                                 //  c
let question02: string = `Which programming language is known for its use of garbage collection, and is commonly used for Android app development?`             //  a
let question03: string = `What is the primary function of the BIOS (Basic Input/Output System) in a computer?`                                                  //  c
let question04: string = `Which type of RAM (Random Access Memory) is faster and more expensive than DDR3, but is not backward compatible?`                     //  c
let question05: string = `What is the purpose of the DHCP (Dynamic Host Configuration Protocol) protocol?`                                                      //  d
let question06: string = `Which type of network attack involves an attacker sending a large amount of traffic to a network in an attempt to overwhelm it?`      //  c
let question07: string = `What is the primary function of the HTTP (Hypertext Transfer Protocol) protocol?`                                                     //  c
let question08: string = `Which web development framework is known for its use of templates and is commonly used for building scalable web applications?`       //  c
let question09: string = `What is the purpose of a firewall in a computer network?`                                                                             //  a
let question010: string = `Which type of encryption is commonly used for secure online transactions, and is based on the principle of public-key cryptography?` //  b

// --------------------   Difficult Questions

let question001: string = `What is the primary purpose of TypeScript?`                                          //  a
let question002: string = `What is the purpose of the any type in TypeScript?`                                  //  a
let question003: string = `What is the purpose of an interface in TypeScript?`                                  //  c
let question004: string = `What is the difference between a class and an interface in TypeScript?`              //  b
let question005: string = `What is the purpose of the export keyword in TypeScript?`                            //  b
let question006: string = `What is type inference in TypeScript?`                                               //  c
let question007: string = `What is the purpose of an enum in TypeScript?`                                       //  d
let question008: string = `What is the purpose of generics in TypeScript?`                                      //  c
let question009: string = `What is the purpose of a type guard in TypeScript?`                                  //  a
let question0010: string = `Is TypeScript compatible with existing JavaScript code?`                            //  b


let ask = await inquirer.prompt([{
    name: "name",
    type: "input",
    message: "what is your name"
},
{
    name: "stage",
    type: "list",
    message: "Which One Would You Like To Select",
    choices: ["Easy","Medium","Difficult","exit"]
}
])
if(ask.name !== "" && ask.name !== "")
{
    console.log("\n\t\t  Hello " + ask.name + " , Welcome To My Quiz\n\n");

    console.log(`\t\tYou Have Selected ${ask.stage} Stage`);
    console.log(`\t\tYou Have To Answer 10 Questions`);


    if(ask.stage == "Easy")
    {
        let easy = await inquirer.prompt([{
            name: "Q1",
            type: "list",
            message: question1,
            choices: ["Earth", "Mars", "Venus", "Jupiter"] //Mars
        },
        {
            name: "Q2",
            type: "list",
            message: question2,
            choices: ["Pig", "Cow", "Goat", "Sheep"] //Pig
        },
        {
            name: "Q3",
            type: "list",
            message: question3,
            choices: ["Paris", "London", "Berlin", "Madrid"] //Paris
        },
        {
            name: "Q4",
            type: "list",
            message: question4,
            choices: ["Minnie Mouse", "Micky Mouse", "Goofy", "Pluto"] //Micky Mouse
        },
        {
            name: "Q5",
            type: "list",
            message: question5,
            choices: ["Komodo dragon","Saltwater crocodile","Black mamba","African elephant"] //Komodo dragon
        },
        {
            name: "Q6",
            type: "list",
            message: question6,
            choices: ["Strawberry","Blueberry","Cherry","Apple"] //Apple
        },
        {
            name: "Q7",
            type: "list",
            message: question7,
            choices: ["Dorothy Gale","The Scarecrow","The Tin Man" ,"The Cowardly Lion"] //Dorothy Gale
        },
        {
            name: "Q8",
            type: "list",
            message: question8,
            choices: ["Vatican City","Monaco","Nauru","San Marino"] //Vatican City
        },
        {
            name: "Q9",
            type: "list",
            message: question9,
            choices: ["Guitar","Drums","Piano","Bagpipes"] //Bagpipes
        },
        {
            name: "Q10",
            type: "list",
            message: question10,
            choices: ["Au","Ag","Cu","Pt"] //Au
        }
        ])

        //question1

        if(easy.Q1 == "Mars"){
            points++
        }
        else{
            console.log(`Q1 : Answer Is Wrong,Correct Answer is Mars`);
        }   

        //question2

        if(easy.Q2 == "Pig"){
            points++
        }
        else{
                console.log(`Q2 : Answer Is Wrong, Correct Answer is Pig`);
                }

        //question3

        if(easy.Q3 == "Paris"){
                points++
        }
        else{
                console.log(`Q3 : Answer Is Wrong, Correct Answer is Paris`);
        }

        //question4

        if(easy.Q4 == "Micky Mouse"){
                points++
        }
        else{
                console.log(`Q4 : Answer Is Wrong, Correct Answer is Micky Mouse`);
        }

        //question5

        if(easy.Q5 === "Komodo dragon"){
                points++
        }
        else
        {
                console.log(`Q5 : Answer Is Wrong, Correct Answer is Komodo dragon`);
        }

        //question6

        if(easy.Q6 === "Apple"){
                points++
        }
        else{
                console.log(`Q6 : Answer Is Wrong, Correct Answer is Apple`);
        }

        //question7

        if(easy.Q7 === "Dorothy Gale"){
                points++
        }
        else{
                console.log(`Q7 : Answer Is Wrong, Correct Answer is Dorothy Gale`);
        }

        //question8

        if(easy.Q8 === "Vatican City"){
                points++
        }
        else{
                console.log(`Q8 : Answer Is Wrong, Correct Answer is Vatican City`);
        }

        //question9

        if(easy.Q9 === "Bagpipes"){
                points++
        }
        else{
                console.log(`Q9 : Answer Is Wrong, Correct Answer is Bagpipes`);
        }

        //question10

        if(easy.Q10 === "Au"){
                points++
        }
        else{
                console.log(`Q10 : Answer Is Wrong, Correct Answer is Au`);
        }
    }

    else if(ask.stage == "Medium")
    {
        let medium = await inquirer.prompt([
        {
            name: "Q01",
            type: "list",
            message: question01,
            choices: ["To create a new Git repository",
                    "To clone an existing Git repository",
                    "To add changes to a Git repository",
                    "To remove files from a Git repository"] //To add changes to a Git repository
        },
        {
            name: "Q02",
            type: "list",
            message: question02,
            choices: ["Java","C++","Python","C#"] //Java
        },
        {
            name: "Q03",
            type: "list",
            message: question03,
            choices: ["To manage memory allocation",
                    "To control the CPU's clock speed",
                    "To provide a interface for configuring hardware settings",
                    "To manage storage devices"] //To provide a interface for configuring hardware settings
        },
        {
            name: "Q04",
            type: "list",
            message: question04,
            choices: ["DDR2","DDR3","DDR4","DDR5"] //DDR4"
        },
        {
            name: "Q05",
            type: "list",
            message: question05,
            choices: ["To assign static IP addresses to devices",
                    "To route traffic between networks",
                    "To provide network address translation",
                    "To dynamically assign IP addresses to devices"] //To dynamically assign IP addresses to devices
        },
        {
            name: "Q06",
            type: "list",
            message: question06,
            choices: ["Phishing","Malware","DDoS","SQL Injection"] //DDoS
        },
        {
            name: "Q07",
            type: "list",
            message: question07,
            choices: ["To encrypt data transmitted over the internet",
                    "To manage email communication",
                    "To transfer data between web servers and clients",
                    "To provide DNS resolution"] //To transfer data between web servers and clients
        },
        {
            name: "Q08",
            type: "list",
            message: question08,
            choices: ["React","Angular","Django","Svelte"] //Dja    ngo
        },
        {
            name: "Q09",
            type: "list",
            message: question09,
            choices: ["To encrypt data transmitted over the interne t",
                    "To block unauthorized access to the network",
                    "To manage user authentication",
                    "To provide antivirus protection"] //To block unauthorized access to the network
        },
        {
            name: "Q010",
            type: "list",
            message: question010,
            choices: ["RSA","ECC","DSA","DH"] //RSA
        }
        ])

        //question1

        if(medium.Q01 === "To add changes to a Git repository"){
            points++
        }
        else{
            console.log(`Q1 : Answer Is Wrong, Correct Answer is To add changes to a Git repository`);
        }

        //question2

        if(medium.Q02 === "Java"){
                points++
        }
        else{
                console.log(`Q2 : Answer Is Wrong, Correct Answer is Java`);
        }

        //question3

        if(medium.Q03 === "To provide a interface for configuring hardware settings"){
                points++
        }
        else{
                console.log(`Q3 : Answer Is Wrong, Correct Answer is To provide a interface for configuring hardware settings`);
        }

        //question4

        if(medium.Q04 === "DDR4"){
                points++
        }
        else{
                console.log(`Q4 : Answer Is Wrong, Correct Answer is DDR4`);
        }

        //question5

        if(medium.Q05 === "To dynamically assign IP addresses to devices"){
                points++
        }
        else{
                console.log(`Q5 : Answer Is Wrong, Correct Answer is To dynamically assign IP addresses to devices`);
        }

        //question6

        if(medium.Q06 === "DDoS"){
                points++
        }
        else{
                console.log(`Q6 : Answer Is Wrong, Correct Answer is 'DDoS'`);
        }

        //question7

        if(medium.Q07 === "To transfer data between web servers and clients"){
                points++
        }
        else{
                console.log(`Q7 : Answer Is Wrong, Correct Answer is 'To transfer data between web servers and clients'`);
        }

        //question8

        if(medium.Q08 === "Django"){
                points++
        }
        else{
                console.log(`Q8 : Answer Is Wrong, Correct Answer is 'Django'`);
        }

        //question9

        if(medium.Q09 === "To block unauthorized access to the network"){
                points++
        }
        else{
                console.log(`Q9 : Answer Is Wrong, Correct Answer is 'To block unauthorized access to the network'`);
        }

        //question10

        if(medium.Q010 === "RSA"){
                points++
        }
        else{
                console.log(`Q10 : Answer Is Wrong, Correct Answer is 'RSA'`);
        }

}

    else if(ask.stage == "Difficult")
    {
        let difficult = await inquirer.prompt([{
                name: "Q001",
                message: question001,
                type: "list",
                choices: ["To add type annotations to JavaScript code",
                        "To compile JavaScript code to machine code",
                        "To provide a new syntax for JavaScript development",
                        "To replace JavaScript with a new programming language"]                                                                                //To add type annotations to JavaScript code
        },
        {
                name: "Q002",
                message: question002,
                type: "list",
                choices: ["To specify that a variable can hold any value",
                        "To specify that a variable can hold only null or undefined values",
                        "To specify that a variable can hold only string values",
                        "To specify that a variable can hold only numeric values"]                                                        //To specify that a variable can hold any value
        },
        {
                name: "Q003",
                message: question003,
                type: "list",
                choices: ["To define a class",
                        "To define a function",
                        "To define a type shape", 
                        "To define a variable"]                                                                                           //To define a type shape
        },
        {
                name: "Q004",
                message: question004,
                type: "list",
                choices: ["A class is used to define a type shape, while an interface is used to define a class",
                                "A class is used to define a class, while an interface is used to define a type shape",
                                "A class is used to define a function, while an interface is used to define a variable",
                                "A class is used to define a variable, while an interface is used to define a function"]                                 //A class is used to define a class, while an interface is used to define a type shape
        },
        {
                name: "Q005",
                message: question005,
                type: "list",
                choices: ["To import a module",
                                "To export a module",
                                "To define a class",
                                "To define a function"]                                                                                                      //To export a module
        },
        {
                name: "Q006",
                message: question006,
                type: "list",
                choices: ["The process of explicitly specifying types for variables",
                                "The process of compiling TypeScript code to JavaScript",
                                "The process of automatically inferring types for variables",
                                "The process of running TypeScript code in a browser"]                                                                               //The process of automatically inferring types for variables
        },
        {
                name: "Q007",
                message: question007,
                type: "list",
                choices: ["To define a class",
                                "To define a function",
                                "To define a variable",
                                "To define a set of named values"]                                                                                                                                     //To define a set of named values
        },
        {
                name: "Q008",
                message: question008,
                type: "list",
                choices: ["To define a class",
                                "To define a function",
                                "To define a type that can work with multiple types",
                                "To define a variable"]                                                                                                               //To define a type that can work with multiple types
        },
        {
                name: "Q009",
                message: question009,
                type: "list",
                choices:["To narrow the type of a value within a specific scope",
                                "To widen the type of a value within a specific scope",
                                "To define a class",
                                "To define a function"]                                                                                                               //To narrow the type of a value within a specific scope
        },
        {
                name: "Q0010",
                message: question0010,
                type: "list",
                choices:["No, TypeScript is a completely separate language",
                                "Yes, TypeScript is fully compatible with existing JavaScript code",
                                "Yes, but only with some modifications to the JavaScript code",
                                "No, but TypeScript can be used alongside JavaScript code"]                                                                   //Yes, TypeScript is fully compatible with existing JavaScript code
        }])

        if(difficult.Q001 === "To add type annotations to JavaScript code"){
                points++
        }
        else{
                console.log("Q1 : answer is incorrect.Correct Answer Is 'To add type annotations to JavaScript code' ")
        }

        if(difficult.Q002 === "To specify that a variable can hold any value")
        {
                points++
        }
        else{
                console.log("Q2 : answer is incorrect.Correct Answer Is 'To specify that a variable can hold any value' ")
        }
        if(difficult.Q003 === "To define a type shape")
        {
                points++
        }
        else{
                console.log("Q3 : answer is incorrect.Correct Answer Is 'To define a type shape' ")
        }
        if(difficult.Q004 === "A class is used to define a class, while an interface is used to define a type shape")
        {
                points++
        }
        else{
                console.log("Q4 : answer is incorrect.Correct Answer Is 'A class is used to define a class, while an interface is used to define a type shape' ")
        }
        if(difficult.Q005 === "To export a module")
        {
                points++
        }
        else{
                console.log("Q5 : answer is incorrect.Correct Answer Is 'To export a module' ");
        }
        if(difficult.Q006 === "The process of automatically inferring types for variables")
        {
                points++
        }
        else{
                console.log("Q6 : answer is incorrect.Correct Answer Is 'The process of automatically inferring types for variables' ");
        }
        if(difficult.Q007 === "To define a set of named values")
        {
                points++
        }
        else{
                console.log("Q7 : answer is incorrect.Correct Answer Is 'To define a set of named values' ");
        }
        if(difficult.Q008 === "To define a type that can work with multiple types")
        {
                points++
        }
        else{
                console.log("Q8 : answer is incorrect.Correct Answer Is 'To define a type that can work with multiple types' ");
        }
        if(difficult.Q009 === "To narrow the type of a value within a specific scope")
        {
                points++
        }
        else{
                console.log("Q9 : answer is incorrect.Correct Answer Is 'To narrow the type of a value within a specific scope' ");
        }
        if(difficult.Q0010 === "Yes, TypeScript is fully compatible with existing JavaScript code")
        {
                points++
        }
        else{
                console.log("Q10 : answer is incorrect.Correct Answer Is 'Yes, TypeScript is fully compatible with existing JavaScript code' ");
        }
    }


    console.log(`\n\n\t\t Congratulations ${ask.name}\n`);
    console.log(`You Got ${points} points`);
    let correct = (points/maxpoints)*100
    let incorrect = 100 - correct

    console.log(`Your Answers Are ${incorrect}% Incorrect`);
    

    if(ask.stage === "exit"){
        process.exit()
    }
}
else
{
    console.log("Please PUT A Valid Name");
    process.exit()
}