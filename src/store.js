import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
          QuranAyats_1: [
            {
              id: 1,
              ayat: "Мы послали Нуха (Ноя) к его народу, и он пробыл среди них тысячу лет без пятидесяти годов. Они были беззаконниками, и их погубил потоп.",
              number: "(29:14)",
            },
            {
              id: 2,
              ayat: "Когда два сборища увидели друг друга, сподвижники Мусы (Моисея) сказали: «Нас непременно настигнут». Он сказал: «О нет! Со мной — мой Господь, и Он укажет мне прямой путь».",
              number: "(26:61-62)",
            },
            {
              id: 3,
              ayat: "Иса (Иисус) сказал: «Воистину, Аллах — мой Господь и ваш Господь. Поклоняйтесь же Ему. Это и есть прямой путь».",
              number: "(19:36)",
            },
          ],
          QuranAyats_2: [
            {
              id: 1,
              ayat: "Воистину, Мы оживляем и умерщвляем, и к Нам предстоит прибытие.",
              number: "(50:43)",
            },
            {
              id: 2,
              ayat: "Смерть настигнет вас, где бы вы ни находились, даже если вы будете в возведенных башнях...",
              number: "(4:78)",
            },
            {
              id: 3,
              ayat: "Скажи: «Смерть, от которой вы убегаете, настигнет вас, после чего вы вернетесь к Ведающему сокровенное и явное, и Он сообщит вам о том, что вы совершали».",
              number: "(62:8)",
            },
            {
              id: 4,
              ayat: "Расходуйте из того, чем Мы вас наделили, до того, как вас постигнет смерть и вы скажете: «Господи! Предоставь мне недолгую отсрочку, и я буду раздавать милостыню и стану одним из праведников».",
              number: "(63:10)",
            },
            {
              id: 5,
              ayat: "Каждая душа вкусит смерть, а потом вы будете возвращены к Нам.",
              number: "(29:57)",
            },
            {
              id: 6,
              ayat: "Каждая душа вкусит смерть, но только в День воскресения вы получите вашу плату сполна. Кто будет удален от Огня и введен в Рай, тот обретет успех, а земная жизнь — всего лишь наслаждение обольщением.",
              number: "(3:185)",
            },
          ],
          QuranAyats_3: [
            {
              id: 1,
              ayat: "Мирская жизнь — всего лишь игра и потеха, а последняя обитель лучше для тех, кто богобоязнен. Неужели вы не разумеете?",
              number: "(6:32)",
            },
            {
              id: 2,
              ayat: "Аллах увеличивает или ограничивает удел тому, кому пожелает. Они радуются мирской жизни, но ведь мирская жизнь по сравнению с Последней жизнью — всего лишь преходящее удовольствие.",
              number: "(13:26)",
            },
            {
              id: 3,
              ayat: "Знайте, что мирская жизнь — всего лишь игра и потеха, украшение и похвальба между вами, а также стремление обрести побольше богатства и детей. Она подобна дождю, растения после которого восхищают земледельцев, но потом они высыхают, и ты видишь их пожелтевшими, после чего они превращаются в труху. А в Последней жизни есть тяжкие мучения и прощение от Аллаха и довольство. Мирская жизнь — всего лишь предмет обольщения.",
              number: "(57:20)",
            },
            {
              id: 4,
              ayat: "Мирская жизнь подобна воде, которую Мы ниспосылаем с неба и благодаря которой (или с которой) смешиваются земные растения, идущие в пищу людям и животным. Когда же земля покрывается убранством и приукрашается, а ее жители полагают, что они властны над ней, Наше повеление постигает ее ночью или днем. Мы превращаем ее в жнивье, словно еще вчера она не изобиловала. Так Мы разъясняем знамения для людей размышляющих.",
              number: "(10:24)",
            },
            {
              id: 5,
              ayat: "Отвернись же от того, кто отвернулся от Нашего Напоминания и не пожелал ничего, кроме мирской жизни.",
              number: "(53:29)",
            },
            {
              id: 6,
              ayat: "О люди! Воистину, обещание Аллаха истинно. Пусть не обольщает вас мирская жизнь, и пусть соблазнитель (дьявол) не обольщает вас относительно Аллаха.",
              number: "(35:5)",
            },
          ],
          QuranAyats_4: [
            {
              id: 1,
              ayat: "Я сотворил джиннов и людей только для того, чтобы они поклонялись Мне.",
              number: "(51:56)",
            },
            {
              id: 2,
              ayat: "А если бы истина зависела от их желаний, то сгинули бы небеса, земля и те, кто на них. Мы даровали им их Напоминание (Коран), однако они отвернулись от своего Напоминания.",
              number: "(23:17)",
            },
            {
              id: 3,
              ayat: "Аллах — Тот, Кто создал небеса и землю и то, что между ними, за шесть дней, а затем вознесся на Трон (или утвердился на Троне). Нет для вас, помимо Него, ни покровителя, ни заступника. Неужели вы не помяните назидание?",
              number: "(32:4)",
            },
          ],
          QuranAyats_5: [
            {
              id: 1,
              ayat: "Вели своей семье совершать намаз и сам терпеливо совершай его. Мы не просим у тебя удела, ведь Мы Сами наделяем тебя уделом. А добрый исход — за богобоязненностью.",
              number: "(20:132)",
            },
            {
              id: 2,
              ayat: "Будь же терпелив вместе с теми, которые взывают к своему Господу по утрам и перед закатом и стремятся к Его Лику. Не отвращай от них своего взора, желая украшений этого мира, и не повинуйся тем, чьи сердца Мы сделали небрежными к Нашему поминанию, кто потакает своим желаниям и чьи дела окажутся тщетными.",
              number: "(18:28)",
            },
            {
              id: 3,
              ayat: "Посему терпи, ибо твое терпение — только от Аллаха. Не скорби по ним и не печалься оттого, что они ухищряются.",
              number: "(16:127)",
            },
          ],
          QuranAyats_6: [
            {
              id: 1,
              ayat: "Вели своей семье совершать намаз и сам терпеливо совершай его. Мы не просим у тебя удела, ведь Мы Сами наделяем тебя уделом. А добрый исход — за богобоязненностью.",
              number: "(20:132)",
            },
            {
              id: 2,
              ayat: "и наделяет его уделом оттуда, откуда он даже не предполагает. Тому, кто уповает на Аллаха, достаточно Его. Аллах доводит до конца Свое дело. Аллах установил меру для каждой вещи.",
              number: "(65:3)",
            },
            {
              id: 3,
              ayat: "Я сотворил джиннов и людей только для того, чтобы они поклонялись Мне.Я не хочу от них никакого удела и не хочу, чтобы они кормили Меня. Воистину, Аллах является Наделяющим уделом, Обладающим могуществом, Крепким.",
              number: "(51:56-58)",
            },
          ],
          QuranAyats_7: [
            {
              id: 1,
              ayat: "Тем же, которые уверовали и совершали праведные деяния, уготованы Райские сады, в которых текут реки. Это — великое преуспеяние!",
              number: "(85:11)",
            },
            {
              id: 2,
              ayat: "Те, которые уверовали и совершали праведные деяния, будут обитателями Рая и пребудут там вечно. Мы не возлагаем на человека сверх его возможностей.",
              number: "(7:42)",
            },
            {
              id: 3,
              ayat: "Воистину, обитатели Рая сегодня будут заняты тем, что будут наслаждаться. Они и их супруги будут лежать в тенях на ложах, прислонившись. Там для них есть фрукты и все, что они потребуют. Милосердный Господь приветствует их словом: «Мир!».",
              number: "(36:55-58)",
            },
          ],
          QuranAyats_8: [
            {
              id: 1,
              ayat: "Воистину, на тех, которые не уверовали и умерли неверующими, лежит проклятие Аллаха, ангелов и людей — всех. Это продлится вечно. Их мучения не будут облегчены, и они не получат отсрочки.",
              number: "(2:161-162)",
            },
            {
              id: 2,
              ayat: "Это угощение лучше или дерево заккум? Мы сделали его искушением для беззаконников. Это — дерево, которое растет из основания Ада. Плоды его — словно головы дьяволов Они будут пожирать их и наполнять ими свои животы. Потом они (плоды заккума) будут смешаны для них с кипятком. А потом их вернут в Ад.",
              number: "(37:62-68)",
            },
            {
              id: 3,
              ayat: "Когда они будут препираться друг с другом в Огне, слабые скажут тем, которые превозносились: «Мы следовали за вами. Не избавите ли вы нас от доли Огня?» Те, которые превозносились, скажут: «Все мы - в нем. Воистину, Аллах уже рассудил между рабами»",
              number: "(40:47-48)",
            },
          ],
          content:
            "Каждая душа вкусит смерть, а потом вы будете возвращены к Нам.",
          number: "(50:43)",
          saveNumber: 0,
          arrayNumber: 1,
          currentArray: null,
        };
    },
    mutations: {
      selectFun (state,x) {
        state.arrayNumber = x
        console.log(state.arrayNumber)
      },
      randomFun (state) {
        switch (state.arrayNumber) {
          case 1 : state.currentArray = state.QuranAyats_1; break;
          case 2 : state.currentArray = state.QuranAyats_2; break;
          case 3 : state.currentArray = state.QuranAyats_3; break;
          case 4 : state.currentArray = state.QuranAyats_4; break;
          case 5 : state.currentArray = state.QuranAyats_5; break;
          case 6 : state.currentArray = state.QuranAyats_6; break;
          case 7 : state.currentArray = state.QuranAyats_7; break;
          case 8 : state.currentArray = state.QuranAyats_8; break;
        }

        let randomNumber = Math.floor(Math.random() * state.currentArray.length);
        while (randomNumber === state.saveNumber) {
          randomNumber = Math.floor(Math.random() * state.currentArray.length);
        }
        state.content = state.currentArray[randomNumber].ayat;
        state.number = state.currentArray[randomNumber].number;
        state.saveNumber = randomNumber
      }
    }
})

export default store