const arrayOfQuotes = [
  {
    'author':' --Oscar Wilde',
    'quote': '\"Be yourself; everyone else is already taken.\"'
  },
  {'author': '--Albert Einstein', 
  'quote': '\"Two things are infinite: the universe and human stupidity; and Im not sure about the universe.\"'
  },
  {'author': '--Epictetus', 
  'quote': '\"It\'s not what happens to you, but how you react to it that matters.\"'
  },
  {'author': '--Frank Sinatra', 
  'quote': '\"The best revenge is massive success.\"'
  },
  {'author': '--Wayne Gretzy', 
  'quote': '\"You miss 100% of the shots you don\'t take.\"'
  },
  {'author': '--Nelson Mandela', 
  'quote': '\"Resentment is like drinking poison and waiting for your enemies to die.\"'
  },
  {'author': '--Elbert Hubbard', 
  'quote': '\"Do not take life too seriously. You will not get out alive.\''
  },
  {'author': ' --Mae West', 
  'quote': '\"You only live once, but if you do it right, once is enough.\"'
  },
  {'author': '--Mahatma Gandhi', 
  'quote': '\"Be the change that you wish to see in the world.\"'
  },
];


function showQuotet(){
    const randomNum= Math.floor( Math.random()* (arrayOfQuotes.length + 1));
    document.getElementById('quote').innerHTML = arrayOfQuotes[randomNum].quote;
    document.getElementById('author').innerHTML = arrayOfQuotes[randomNum].author;

}