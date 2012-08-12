   
                var soundtrack = new Audio(); 
                soundtrack.loop= true;
                var source = document.createElement('source');
                
                if(soundtrack.canPlayType('audio/mpeg')){
                    source.type='audio/mp3';
                    source.src='sound/soundtrack.mp3';
                } else {
                    source.type='audio/ogg';
                    source.src='sound/soundtrack.ogg';
                }
                      
                soundtrack.appendChild(source);
                
                var boing = new Audio('sound/boing.mp3');
                
                var risata = new Audio('sound/risata.mp3');
                
                var applausi = new Audio('sound/applausi.mp3');