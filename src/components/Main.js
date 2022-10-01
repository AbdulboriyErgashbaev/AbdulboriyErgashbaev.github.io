import React from 'react'
import DuaCard from './DuaCard'
import DuaForParrents from "../assets/audio/audi.ogg"
import DuaForParadise from "../assets/audio/paradise.ogg"
import DuaOfSickness from "../assets/audio/sickness.ogg"
import laylatulqord from "../assets/audio/laylatulqord.ogg"
import DropMenu from './DropMenu'
import rich from "../assets/audio/rich.ogg"
import marrige from "../assets/audio/marrige.ogg"
import sleep from "../assets/audio/sleep.ogg"


function Main() {
  const zametka ="Сёстрам на заметку))"
  return (
    <div className='main'>
      <DropMenu/> 
      <div className='main-heading'>
        <h1>В этом разделе я собрал полезные дуа, которые выучил сам. Хочу посоветовать выучить вам 😊 </h1>
      </div>
      <div className="ota container2">
        
        <div id='duaforparrents'><DuaCard  name="Дуа за родителей" transcription="(Роббир хамхумаа камаа роббаяяни согыроо)"   audi={DuaForParrents} translation="«Господи! Помилуй их, вудь они растили меня ребёнком» (17:24)"/></div>
        <i className='bi bi-flower1'></i>
      
       <div  id='duaforparadise'> <DuaCard  name="Дуа для тех кто хочет попасть в рая" transcription="(Аллохумма инни ас алукал жанната ва ауьзубика мина-н-нар)"   audi={DuaForParadise} translation="«О Аллах, поистине, я прошу Тебя о Рае и пребигаю к тебе от огня»"/> </div>
       <i className='bi bi-flower1'></i>
       <div  id='duaofsickness'> <DuaCard  name="Дуа от болезни" transcription="(  رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ )"   audi={DuaOfSickness} translation="  «Поистине, меня коснулся вред, а Ты (о, Аллах) – милостивейший из милосердных! (Так удали же от меня этот вред)!» (21:83) "/> </div>
       <i className='bi bi-flower1'></i>
       <div  id='laylatulqodr'> <DuaCard  name="Дуа в ночь предопределения" transcription="( Аллохумма иннака афуувун кариимун тухиббул афва фа'фу анни )"   audi={laylatulqord} translation="«О Аллах, поистине Ты - прощающий и любишь прощать, так прости меня»"/> </div>
       <i className='bi bi-flower1'></i>
       <div  id='rich'> <DuaCard  name="Дуа для богатства" transcription="( وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ )" audi={rich}     /> </div>
       <i className='bi bi-flower1'></i>
       <div  id='duaformarrige'> <DuaCard zametka={zametka} name="Дуа, чтобы выйти за праведного человека Замуж" transcription="( رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا )" audi={marrige}  translation="«Господь наш! Даруй нам отраду глаз в наших супругах и потомках и сделай нас образцом для богобоязненных»"   /> </div>
       <i className='bi bi-flower1'></i>
       <div  id='duabeforesleep'> <DuaCard  name="Дуа перед сном" transcription="( Бисмика Аллохумма амууту ва ахйаа )" audi={sleep}  translation="«С твоим именем, О Аллах, я умираю и воскресну»"   /> </div>
       <i className='bi bi-flower1'></i>
        </div>
    </div>
  )
}

export default Main