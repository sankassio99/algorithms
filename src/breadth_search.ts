// find the mango seller
// BIG O(number of people, number of arestas)
// O(V + A)

let dict :{ [key: string]: string[] } = {
    'you': ["bob", "claire", "alice"],
    'bob': ["anuj", "peggy"],
    'alice': ["peggy"],
    'claire': ["thom", "jonny"],
    'peggy':[],
    'jonny':[],
    'thom':[],
    'anuj':[],
};

let verified: Array<string> = [];
let mangoSeller = 'alice';

function getMangoSeller(){
    let queueSearch: Array<string> = dict.you;

    while(queueSearch.length > 0){
        let person : string | undefined = queueSearch.splice(0,1)[0];

        console.log(person);

        if(person != undefined &&  person == mangoSeller){
            console.log("mango seller is: "+person);
            return true;
        }else{
            if(!verified.includes(person)){
                queueSearch = queueSearch.concat(dict[person]);
            }
        }

        verified.push(person);
    }

    return false;   
}

console.log(getMangoSeller());