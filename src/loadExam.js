function loadExam(setQuestionList){
  var questions = [{text: "Mitä lämpötilaa kertoo?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Sataako vai eiko", isCorrect: false}, {id:1, text: "Onko kylmää vai lämmintä", isCorrect: true}, {id:2, text: "Mikä verenpaine on", isCorrect: false}]}, {text: "Saako kädellä mitattua mikä kehon tarkka lämpötila on? ", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: false}, {id:1, text: "Ei", isCorrect: true}]}, {text: "Millä lämpötilaa mitataan?", image: "text.png", type: "text-input", correct: "lämpömittarilla"}, {text: "____ näyttävät lämpötilan numeroina", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Digitaalimittarit", isCorrect: true}, {id:1, text: "Nestelämpömittarit", isCorrect: false}, {id:2, text: "Saunan lämpömittarit", isCorrect: false}]}, {text: "____ värjätyn nesteen yläreuna kertoo lämpötila-asteikolta lämpötilan", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Saunan lämpömittarissa", isCorrect: false}, {id:1, text: "Digitaalimittarissa", isCorrect: false}, {id:2, text: "Nestelämpömittarissa", isCorrect: true}]}, {text: "_____ on viisari", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Nestelämpömittarissa", isCorrect: false}, {id:1, text: "Digitaalimittarissa", isCorrect: false}, {id:2, text: "Saunan lämpömittarissa", isCorrect: true}]}, {text: "Lämpötilan yksikkö on:", image: "text.png", type: "text-input", correct: "Celsiusaste"}, {text: "Millä sanalla kuvaillaan kun lämpötila on yli 25 °C", image: "text.png", type: "text-input", correct: "Helle"}, {text: "Millä sanalla kuvaillaan kun lämpötila on alle 0 °C", image: "text.png", type: "text-input", correct: "Pakkanen"}, {text: "Missä lämpötilassa jää sulaa? ___ °C", image: "text.png", type: "text-input", correct: "0"}, {text: "Mikä on veden kiehumispiste?  ___ °C", image: "text.png", type: "text-input", correct: "100"}, {text: "Kuumessa kehon lämpötila on yli ___ °C", image: "text.png", type: "text-input", correct: "37"}, {text: "Mistä lampö siirtyy?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Lämpö siirtyy kylmastä lämpimään", isCorrect: false}, {id:1, text: "Lämpö siirtyy lämpimästä kylmään ", isCorrect: true}, {id:2, text: "Lämpö siirtyy idästä länteen", isCorrect: false}]}, {text: "Mikä hidastaa jäähtymistä ja lämpenemistä?", image: "text.png", type: "text-input", correct: "Lämmöneriste"}, {text: "Mikä on kehon lämpötila?  ___ °C", image: "text.png", type: "text-input", correct: "37"}, {text: "Minkä kehon kohdan kautta lämpö siirtyy erityisen paljon?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Jalkojen kautta", isCorrect: false}, {id:1, text: "Pään kautta", isCorrect: true}, {id:2, text: "Käsien kautta", isCorrect: false}, {id:3, text: "Vatsan kautta", isCorrect: false}]}, {text: "Mikä on hyvä lämmöneriste?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Tuuli", isCorrect: false}, {id:1, text: "Paikallaan pysyvä ilma", isCorrect: true}, {id:2, text: "Metalli", isCorrect: false}]}, {text: "Mikä tekee että villapaita tuntuu lämpimänä?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Koska että se on tehty lampaasta", isCorrect: false}, {id:1, text: "Koska villa on pehmeä", isCorrect: false}, {id:2, text: "Koska villan sisällä on paljon paikallaan pysyvää ilmaa", isCorrect: true}]}, {text: "Mikä pitää karhun lämpimänä?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Ilma", isCorrect: false}, {id:1, text: "Turkki ja kynnet", isCorrect: false}, {id:2, text: "Turkki ja rasvakerros", isCorrect: true}]}, {text: "Mikä pitää linnut lämpimänä?", image: "text.png", type: "text-input", correct: "Höyhenet"}, {text: "Miksi lumen alla lämpötila ei laske kovin paljon?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Koska lumi on kostea", isCorrect: false}, {id:1, text: "Koska lumen sisällä on ilmaa", isCorrect: true}, {id:2, text: "Koska lumi on lämmöneriste", isCorrect: false}]}, {text: "Miksi monet eläimet viettävät talven hangen alla?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Koska lumihanki on hauska", isCorrect: false}, {id:1, text: "Koska siellä on mukavan pehmeätä", isCorrect: false}, {id:2, text: "Koska ne eivät kestä kovaa pakkasta", isCorrect: true}]}, {text: "Lehtipuut pudottavat lehteensä _____", image: "text.png", type: "text-input", correct: "Syksyllä"}, {text: "_____ kasvaa keväällä uusia lehtiä", image: "text.png", type: "text-input", correct: "Silmuista"}, {text: "Mitä ruska tarkoittaa?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Se, että  syksyllä maa muuttuu ruskeaksi", isCorrect: false}, {id:1, text: "Se, että syksyllä puiden lehdet alkavat kellastua", isCorrect: true}, {id:2, text: "Se, että talvella karhut nukkuvat talviunta", isCorrect: false}]}, {text: "Minkä avulla monet kasvit talvehtivat maan alla?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Lumen avulla", isCorrect: false}, {id:1, text: "Kurpitsojen tai sipulien avulla", isCorrect: false}, {id:2, text: "Juurien tai sipulien avulla", isCorrect: true}]}, {text: "______ kutsutaan kasveja, joiden kuivat varret jäävät pystyyn ja ulottuvat hangen yläpuolelle", image: "text.png", type: "text-input", correct: "Talventörröttäjäksi"}, {text: "Lehdet putoavat maahan ja muuttuvat muutamassa vuodessa _____", image: "text.png", type: "text-input", correct: "mullaksi"}, {text: "Talvella talventörröttäjien ______ putoavat lumen pinnalle, ja tuuli kuljettaa ne kauas", image: "text.png", type: "text-input", correct: "siemenet"}, {text: "Miksi talvella kasvit eivät kasva? Valitse paras vastaus", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Koska on kylmä", isCorrect: false}, {id:1, text: "Koska maa on jäässä", isCorrect: false}, {id:2, text: "Koska ne eivät saa tarpeeksi vettä ja auringonvaloa", isCorrect: true}]}, {text: "Miten kutsutaan pienen puun alkua?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Silmu", isCorrect: false}, {id:1, text: "Siemen", isCorrect: false}, {id:2, text: "Taimi", isCorrect: true}]}, {text: "Minkä sisällä kuusen ja männyn siemenet kehittyvät?", image: "text.png", type: "text-input", correct: "Käpyjen"}, {text: "Kuuset ja männyt ______ siemenistä", image: "text.png", type: "text-input", correct: "lisääntyvät"}, {text: "Onko lumi hyvä lämmöneriste?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: true}, {id:1, text: "Ei", isCorrect: false}]}, {text: "Mikä on eläimen nimi? 1", image: "Talvi.jpeg", type: "text-input", correct: "orava"}, {text: "Mikä on eläimen nimi? 2", image: "Talvi.jpeg", type: "text-input", correct: "metsäjänis"}, {text: "Mikä on eläimen nimi? 3", image: "Talvi.jpeg", type: "text-input", correct: "rusakko"}, {text: "Mikä on eläimen nimi? 4", image: "Talvi.jpeg", type: "text-input", correct: "myyrä"}, {text: "Mikä on eläimen nimi? 5", image: "Talvi.jpeg", type: "text-input", correct: "karhu"}, {text: "Mikä on eläimen nimi? 6", image: "Talvi.jpeg", type: "text-input", correct: "kärppä"}, {text: "Mikä on eläimen nimi? 7", image: "Talvi.jpeg", type: "text-input", correct: "kyy"}, {text: "Miten karhu viettää talven?", image: "text.png", type: "text-input", correct: "talviunessa"}, {text: "Missä karhu nukkuu talvella?", image: "text.png", type: "text-input", correct: "talvipesässä"}, {text: "Mitä tapahtuu karhulle talviunen aikana?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Sydän lyö hitaasti ja ruumiinlämpö laskee vähän", isCorrect: true}, {id:1, text: "Sydän lyö nopeatsi ja ruumiinlämpö nousee vähän", isCorrect: false}, {id:2, text: "Sydän lyö hitaasti ja ruumiinlämpö laskee paljon", isCorrect: false}]}, {text: "Montako pentua naaraskarhu synnyttää?", image: "text.png", type: "text-input", correct: "1-4"}, {text: "Miten siili viettää talven?", image: "text.png", type: "text-input", correct: "horroksessa"}, {text: "Missä on lämpimämpää: lumen alla vai lumen päällä?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "lumen alla", isCorrect: true}, {id:1, text: "lumen päällä", isCorrect: false}]}, {text: "Mikä on metsäjäniksen paras turva?", image: "text.png", type: "text-input", correct: "talviturkki"}, {text: "Minkä värinen lumikko on talvella", image: "text.png", type: "text-input", correct: "valkoinen"}, {text: "Miten kutsutaan valkoista talviturkkia?", image: "text.png", type: "text-input", correct: "suojaväriksi"}, {text: "Laskeeko ruuminlämpo enemmän horroksessa vai talviunessa?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "talviunessa", isCorrect: false}, {id:1, text: "horroksessa", isCorrect: true}]}, {text: "Mikä jää mustaksi kärpällä talvella?", image: "text.png", type: "text-input", correct: "hännänpää"}, {text: "Keiltä jäniksen valkoinen väri auttaa piiloutumaan?", image: "text.png", type: "text-input", correct: "saalistajilta"}, {text: "Keiltä petoeläinten valkoinen väri auttaa piiloutumaan?", image: "text.png", type: "text-input", correct: "saaliseläimiltä"}, {text: "Talvella järvien jään alla veden lämpötila on nollan ____", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "yläpuolella", isCorrect: true}, {id:1, text: "alapuolella", isCorrect: false}]}, {text: "Jään alla on lähes ____", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "valoisaa", isCorrect: false}, {id:1, text: "pimeää", isCorrect: true}]}, {text: "Kalat ovat ____", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "vaihtolämpöisiä", isCorrect: true}, {id:1, text: "tasalämpöisiä", isCorrect: false}]}, {text: "Nisäkkäät ovat _____", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "vaihtolämpöisiä", isCorrect: false}, {id:1, text: "tasalämpöisiä", isCorrect: true}]}, {text: "Kalat ovat talvella ____", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "hidasliikkeisiä", isCorrect: true}, {id:1, text: "nopeita", isCorrect: false}]}, {text: "Sammakot vaipuvat talveksi____", image: "text.png", type: "text-input", correct: "horrokseen"}, {text: "Nisäkkäiden ruuminlämpö muuttuu ympäristön lämpötilan mukaiseksi", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: false}, {id:1, text: "Ei", isCorrect: true}]}, {text: "Kalojen ruuminlämpö muuttuu ympäristön lämpötilan mukaiseksi", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: true}, {id:1, text: "Ei", isCorrect: false}]}, {text: "Saukko pystyy liikkumaan nopeasti talvellakin", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: true}, {id:1, text: "Ei", isCorrect: false}]}, {text: "Minkä avulla saukko löytää saaliinsa pimeydessä?", image: "text.png", type: "text-input", correct: "tuntoviiksiensä"}, {text: "Pystyykö saukko tekemään avantoa jäähän?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: false}, {id:1, text: "Ei", isCorrect: true}]}, {text: "Mikä loppuu jos järvet ovat pitkään jäässä?", image: "text.png", type: "text-input", correct: "happi"}, {text: "Mitä kaloille tapahtuu jos happi loppuu?", image: "text.png", type: "text-input", correct: "kuolevat"}, {text: "Tuleeko jäätyneeseen järveen lisää happea?", image: "question.jpeg", type: "multiple-choice", options: [{id:0, text: "Joo", isCorrect: false}, {id:1, text: "Ei", isCorrect: true}]}, {text: "Mikä virke sopii paremmin kuvaan? 1", image: "Syksy.jpeg", type: "multiple-choice", options: [{id:0, text: "Siemenistä kasvaa keväällä uusi kasvi", isCorrect: false}, {id:1, text: "Silmun sisällä on pieni lehden alku", isCorrect: true}, {id:2, text: "Talventörröttäjien siemenet putoavat talvella lumen päälle", isCorrect: false}, {id:3, text: "Kävyn sisällä kehittyy siemeniä", isCorrect: false}]}, {text: "Mikä virke sopii paremmin kuvaan? 2", image: "Syksy.jpeg", type: "multiple-choice", options: [{id:0, text: "Siemenistä kasvaa keväällä uusi kasvi", isCorrect: true}, {id:1, text: "Silmun sisällä on pieni lehden alku", isCorrect: false}, {id:2, text: "Talventörröttäjien siemenet putoavat talvella lumen päälle", isCorrect: false}, {id:3, text: "Kävyn sisällä kehittyy siemeniä", isCorrect: false}]}, {text: "Mikä virke sopii paremmin kuvaan? 3", image: "Syksy.jpeg", type: "multiple-choice", options: [{id:0, text: "Siemenistä kasvaa keväällä uusi kasvi", isCorrect: false}, {id:1, text: "Silmun sisällä on pieni lehden alku", isCorrect: false}, {id:2, text: "Osa kasveista talvehtii sipulien avulla", isCorrect: true}, {id:3, text: "Talventörröttäjien siemenet putoavat talvella lumen päälle", isCorrect: false}]}, {text: "Mikä virke sopii paremmin kuvaan? 4", image: "Syksy.jpeg", type: "multiple-choice", options: [{id:0, text: "Siemenistä kasvaa keväällä uusi kasvi", isCorrect: false}, {id:1, text: "Silmun sisällä on pieni lehden alku", isCorrect: false}, {id:2, text: "Osa kasveista talvehtii sipulien avulla", isCorrect: false}, {id:3, text: "Talventörröttäjien siemenet putoavat talvella lumen päälle", isCorrect: true}]}, {text: "Mikä virke sopii paremmin kuvaan? 5", image: "Syksy.jpeg", type: "multiple-choice", options: [{id:0, text: "Siemenistä kasvaa keväällä uusi kasvi", isCorrect: false}, {id:1, text: "Silmun sisällä on pieni lehden alku", isCorrect: false}, {id:2, text: "Kävyn sisällä kehittyy siemeniä", isCorrect: true}, {id:3, text: "Talventörröttäjien siemenet putoavat talvella lumen päälle", isCorrect: false}]}, {text: "Mikä on lämpö? ___ °C", image: "neste.jpeg", type: "text-input", correct: "17"}, {text: "Mikä on lämpö? ___ °C", image: "neste2.jpeg", type: "text-input", correct: "22"}, {text: "Mikä on lämpömittari on kuvassa?", image: "neste.jpeg", type: "text-input", correct: "nestelämpömittari"}, {text: "Mikä on lämpömittari on kuvassa?", image: "digi.jpeg", type: "text-input", correct: "digitaalimittari"}, {text: "Mikä on lämpömittari on kuvassa?", image: "sauna.jpeg", type: "text-input", correct: "saunan lämpömittari"}, {text: "Mikä virke sopii paremmin kuvaan? 1", image: "Jaa.jpeg", type: "multiple-choice", options: [{id:0, text: "Kalat ovat talvella hidasliikkeisiä", isCorrect: false}, {id:1, text: "Saukko saalistaa kaloja myös talvella", isCorrect: true}, {id:2, text: "Ravut viettävät talven kiven kolossa järven pohjalla", isCorrect: false}]}, {text: "Mikä virke sopii paremmin kuvaan? 2", image: "Jaa.jpeg", type: "multiple-choice", options: [{id:0, text: "Kalat ovat talvella hidasliikkeisiä", isCorrect: false}, {id:1, text: "Saukko saalistaa kaloja myös talvella", isCorrect: false}, {id:2, text: "Ravut viettävät talven kiven kolossa järven pohjalla", isCorrect: true}]}, {text: "Mikä virke sopii paremmin kuvaan? 3", image: "Jaa.jpeg", type: "multiple-choice", options: [{id:0, text: "Kalat ovat talvella hidasliikkeisiä", isCorrect: true}, {id:1, text: "Saukko saalistaa kaloja myös talvella", isCorrect: false}, {id:2, text: "Ravut viettävät talven kiven kolossa järven pohjalla", isCorrect: false}]}, {text: "Mitä kasvit ovat varastoineet kesällä juurien ja sipuleihin? _____ seuraavaa kevättä varten", image: "text.png", type: "text-input", correct: "ravintoa"}];

  //var text;

  //text = httpGet("https://sheets.googleapis.com/v4/spreadsheets/1i9c9nfmQK8_NG72ZCjhIH_8LGYtQ3Hp9t6vCNI8yt8U/values/YM011222!N1?key=AIzaSyAINj20b6Z5972rGjqvZqJTh9uxYEFGTpM");

  //console.log((text));
  
  //var jvalue;

  //jvalue = JSON.parse(text).values[0][0];

  //console.log(jvalue);

  //var q;

  //q = JSON.parse(jvalue);

  setQuestionList(questions);
  }

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
  
  export default loadExam;
  