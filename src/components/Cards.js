import React from 'react'
import ImgMediaCard from './card';

function Cards() {

      return(
          <>
            <div className="courses">
              <ImgMediaCard 
              image="https://miro.medium.com/max/384/1*6ESo1TV2VliQ6x6jBIebhg.png" 
              name="Курс по технологии React" 
              description="JavaScript-библиотека для создания пользовательских интерфейсов. Данная технология основана на компонентном подходе.
              Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы."/> 

              <ImgMediaCard 
              image="https://404store.com/2018/03/24/angularjs.png"
              name="Курс по технологии Angular" 
              description="Angular представляет фреймворк от компании Google для создания клиентских приложений. Прежде всего он нацелен на разработку SPA-решений (Single Page Application), то есть одностраничных приложений. В этом плане Angular является наследником другого фреймворка AngularJS."/>
              
              <ImgMediaCard 
              image="https://habrastorage.org/webt/tj/zs/el/tjzseld78ryzmf6-cz2wp69tops.jpeg"
              name="Курс по технологии Vue" 
              description="Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле."/>
            </div>
    
            <div className="courses">
              <ImgMediaCard 
              image="https://im0-tub-ru.yandex.net/i?id=71efc90dc5700507bb67b2a1b62cd434-sr&n=13&exp=1" 
              name="Курс по технологии JavaScript" 
              description="JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript."/>

              <ImgMediaCard 
              image="https://hsto.org/getpro/habr/post_images/8f4/a9c/78e/8f4a9c78ecca4dd9f35c1e74d4e959d7.png"
              name="Курс по технологии NodeJS" 
              description="Node.js представляет среду выполнения кода на JavaScript, которая построена на основе движка JavaScript Chrome V8, который позволяет транслировать вызовы на языке JavaScript в машинный код. Node.js прежде всего предназначен для создания серверных приложений на языке JavaScript."/>

              <ImgMediaCard 
              image="https://avatars.mds.yandex.net/get-ynews/44577/83743581117697f1b9ebc0c2c003239d/406x219"
              name="Курс по технологии MongoDB" 
              description="MongoDB — документоориентированная система управления базами данных с открытым исходным кодом, не требующая описания схемы таблиц. Классифицирована как NoSQL, использует JSON-подобные документы и схему базы данных. Написана на языке C++."/> 
            </div>
          </>
      )
  }
export default Cards