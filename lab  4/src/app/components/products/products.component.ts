import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product [] = [];


  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      {
        name: 'Шахматный набор "Орловская Ладья P-1"',
        description: 'Дерево хвойных, лиственных пород. Фанера, рисунок (шелкография), покрытие лак. Шахматные обиходные деревянные фигуры, покрытие лак — 32 шт. (16 светлых, 16 темных). Размеры шахматных фигур: Король: 70 мм * d 25 мм; Ферзь: 60 мм * d 25 мм; Слон: 50 мм* d 25 мм; Конь: 47 мм * d 25 мм; Ладья: 40 мм * d 25 мм; Пешка: 40 мм * d 25 мм. Размер доски: 290*145*40 мм в термоупаковке.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/orlovskaja-lad-ja-p-1-100634146/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h90/32914749390878/orlovskaa-lada-p-1-100634146-1-Container.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h47/49815433052190/orlovskaa-lada-p-1-100634146-3.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/h00/32914752700446/orlovskaa-lada-p-1-100634146-2-Container.jpg'
        ]
      },
      {
        name: 'Книга Булгаков М. А.: Собачье сердце',
        description: 'В начале 1920-х гг. М. Булгаков последовательно создает три повести: "Дьяволиада" (1923), "Роковые яйца" (1924) и "Собачье сердце" (1925). Это была непосредственная и бурная реакция на "советизацию" России, на воцарение касты "шариковых". Повести "Дьяволиада" и "Роковые яйца" были опубликованы, соответственно, в 1924-м и 1925 гг. "Собачье сердце" ждало своего часа сорок три года. Булгаков-сатирик продолжает традиции русской прозы - Гоголя и Салтыкова-Щедрина. А в ранних его повестях уже прочитываются наметки к будущим главам "Мастера и Маргариты".',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/bulgakov-m-a-sobach-e-serdtse-100343199/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha2/hbd/63911526989854.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hf4/h26/63911529971742.jpg?format=gallery-large'
        ]
      },
      {
        name: 'Ноутбук Acer EX215-22 NX.EG9ER.02E черный',
        description: 'Ноутбуки Extensa 15 разработаны для деловых людей, которым необходима достаточная вычислительная мощность и функциональность на каждый день. В них есть все, что нужно для комфортной работы, а время автономной работы достигает 9 часов. Эти 15.6-дюймовые ноутбуки с большим экраном обеспечивают высокую производительность и предоставляют полный набор важных бизнес-функций, а также оснащены цифровой клавиатурой. Невероятное быстродействие. Работайте быстро и эффективно в режиме многозадачности благодаря мощному процессору AMD Ryzen, видеокарте AMD Radeon и памяти DDR4. Потрясающее изображение. Дисплей FHD с диагональю 15.6 дюймов и узкой рамкой создает более высокое соотношение размеров экрана и корпуса. Кроме того, технология ComfyView уменьшает блики за счет ограничения отраженного света, обеспечивая более комфортный просмотр изображения на экране. Превосходное качество видеосвязи. Работать из дома удобно как никогда. Благодаря продуманному расположению антенны Wi-Fi 5 (802.11ac) с технологией MU-MIMO обеспечивается надежный сигнал беспроводного подключения. Оптимизированная цифровая веб-камера, микрофон и два встроенных стереодинамика создают превосходное качество звука и изображения. Быстрое и легкое подключение к периферийным устройствам благодаря максимальному количеству опций. Ноутбук оснащен различными портами, включая 1 порт USB2.0, 2 порта USB3.2 Gen1, HDMI и многие другие.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/acer-ex215-22-nx-eg9er-02e-chernyi-105605371/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/hdf/52386303705118/acer-ex215-22-nx-eg9er-02e-seryj-105605371-1.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h3c/52645748211742/acer-ex215-22-nx-eg9er-02e-seryj-105605371-2.jpg'
        ]
      },
      {
        name: 'Смартфон Xiaomi Redmi Note 11 4 ГБ/128 ГБ серый',
        description: 'Совершенно новый Xiaomi Redmi Note 11 отличается модным дизайном, с плоской рамкой и минималистичным стилем. Дисплей Xiaomi Redmi Note 11 с подсветкой, обеспечивает максимальную яркость, контрастность, калибровку цветов и разрешение. Наслаждайтесь любимым контентом с высокой частотой обновления дисплея Xiaomi Redmi Note 11 в 90 Гц. С комфортом просматривайте ленту в социальных сетях или наслаждайтесь онлайн играми. Процессор Xiaomi Redmi Note 11 не только быстрый и мощный, но и энергоэффективный. 6-нанометровый техпроцесс, обеспечивает высокую производительность при одновременном увеличении времени автономной работы. Более высокая скорость загрузки с UFS 2.2 и ускоренная запись с помощью Write Booster - эффективная высокоскоростная установка приложений, функции запуска и кэширования файлов, а также чтение и запись больших файлов. Мощная система с четырьмя камерами: 50 Мп основная камера, рядом с ней размещаются 8 Мп ультра широкая, 2 МП макромодуль и 2 МП сенсор для размытия фона. А 13 Мп селфи камера позволяет запечатлеть каждый момент своей жизни и ничего не пропускайте с Xiaomi Redmi Note 11. Заряжайте свой смартфон до 100% примерно за час с помощью быстрой зарядки мощностью 33 Вт Pro.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-seryi-103541773/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/hc9/48472414289950/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-1.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hc8/49957801000990/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-3.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h01/49957801230366/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-4.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h05/49957801918494/xiaomi-redmi-note-11-4-gb-128-gb-seryj-103541773-6.jpg'
        ]
      },
      {
        name: 'Xiaomi Mi Power Bank 3 Ultra Compact 10000 мАч',
        description: 'Миниатюрный корпус. При весе всего в 200 грамм внешний аккумулятор Xiaomi почти на треть меньше зарядного устройства для Mi Notebook, благодаря чему ему без труда можно найти место в кармане или сумочке. Выдает мощность до 22.5 Вт. При использовании одного порта USB-A или USB-C внешний аккумулятор Xiaomi может выдавать общую мощность до 22.5 Вт, быстро заряжая любое подключенное устройство. Одновременная зарядка трех устройств. Кроме двух стандартных портов USB-A у внешнего аккумулятора Xiaomi есть один порт USB-C, что позволяет одновременно заряжать от него три разных устройства. Быстрая зарядка через USB-C в обе стороны. Сам внешний аккумулятор Xiaomi можно заряжать через порт USB-C или порт Micro-USB, при этом порт USB-C поддерживает быструю зарядку как подключенных устройств, так и самого аккумулятора, позволяя заряжать его мощностью до 22.5 Вт, чтобы сэкономить еще больше времени на зарядке. Действительно для всего. Дважды нажав на кнопку проверки уровня заряда, можно включить режим зарядки малым током, созданный специально для безопасной зарядки Bluetooth-гарнитур, браслетов и других компактных устройств.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/xiaomi-mi-power-bank-3-ultra-compact-10000-mach-chernyi-101800648/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd1/33637764333598/xiaomi-mi-power-bank-3-ultra-compact-10000mah-pb1022zm-cernyj-101800648-2-Container.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/hc7/50917373411358/xiaomi-mi-power-bank-3-ultra-compact-10000-mac-cernyj-101800648-4.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h55/50917373870110/xiaomi-mi-power-bank-3-ultra-compact-10000-mac-cernyj-101800648-5.jpg'
        ]
      },
      {
        name: 'Компьютерное кресло Canyon Fobos CND-SGCH3, черный',
        description: 'Газлифт 4 поколения Кресло имеет надежный газлифт, который позволяет регулировать высоту сиденья с максимальной точностью. Благодаря этому вы можете удобно сидеть за любым столом, избегая ненужной нагрузки на руки и плечи. Газлифт изготовлен по новейшей технологии, которая прошла тщательное тестирование. Высококачественная экокожа с пенонаполнителем Кресло покрыто высококачественной экокожей, напоминающей кожу, используемую в интерьере автомобилей премиум-класса. Она легко моется, устойчива к повреждениям и приятна на ощупь. Высококачественный пенонаполнитель мягко поддерживает тело, помогая таким образом избежать дискомфорта и усталости мышц. Подушка для поясницы Нижняя часть спины часто подвергается чрезмерным нагрузкам, поэтому мы обратили особое внимание на дизайн подушки опоры для поясницы. Она обеспечит вам максимальный комфорт, даже если вы хотите играть в течение многих часов. Сядьте удобно и победите в затяжных играх!',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/komp-juternoe-canyon-fobos-cnd-sgch3-chernyi-17800396/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb9/63814701383710.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/ha4/h3c/63814704300062.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h02/hfa/63814707150878.jpg?format=gallery-large'
        ]
      },
      {
        name: 'Музыкальный инструмент: Гитара YAMAHA C40 Natural',
        description: 'YAMAHA C40 – полноразмерная классическая гитара из линейки «С» от известного японского производителя. Эта гитара отличается высоким качеством сборки, отличным звучанием, она удобна при игре, а цена ее при этом весьма демократична. Такая гитара станет прекрасным выбором для начинающих музыкантов и обучающихся игре на инструменте. Как и все гитары производства Yamaha, эта модель прошла тщательное тестирование и проверку качества. Звук инструмента – очень приятный, мягкий, не слишком громкий. Верхняя дека C40 выполнена из древесины ели, часто используемой в конструкции акустических гитар благодаря своим акустическим свойствам. Корпус гитары формы СG – из меранти, эту древесину иногда также называют «филиппинское красное дерево», с глянцевым покрытием. Гриф – из древесины нато, отделка - матовая. На грифе 19 ладов без инкрустации. Накладка на гриф – плоская, выполнена из палисандра. Бридж гитары также палисандровый. Модель представлена в элегантном натуральном цвете, колки – хромированные RM-1252X. На Yamaha C40 установлены нейлоновые струны.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/yamaha-c40-natural-14100052/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hbf/h22/63757912277022.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h09/h51/63757913325598.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h6a/h51/66342947061790.jpg?format=gallery-large'
        ]
      },
      {
        name: 'Телевизор Samsung UE43T5300AUXCE 109 см',
        description: 'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких и темных сценах. Технология Ultra Clean View анализирует исходный контент с помощью новейшего алгоритма и формирует более качественные изображения с минимальным искажением. Наслаждайтесь четкостью изображения. Смотрите любимые программы в естественных цветах, которые воспроизводят детали также четко, как в реальности. Получите более красочное впечатление от просмотра. Почувствуйте контраст и цвета оттенков. Технология Micro Dimming Pro делит экран на фрагменты, анализирует каждый из них и обеспечивает более глубокий черный цвет и более чистый белый цвет. Почувствуйте контраст и цвета оттенков. Технология Micro Dimming Pro делит экран на фрагменты, анализирует каждый из них и обеспечивает более глубокий черный цвет и более чистый белый цвет. Приложение SmartThings app оснащено функциями Универсального гида, Пульта ДУ и Панели управления (Dashboard).',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hb1/h8e/63880824258590.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h4f/h4d/63880826617886.jpg?format=gallery-large'
        ]
      },
      {
        name: 'Рахат шоколадная плитка молочный 100 г',
        description: 'Особенно вкусный молочный шоколад Казахстанский с ванильным ароматом изготовлен из отборных какао-бобов по классической технологии на шоколадной фабрике Рахат. Натуральный шоколад зарядит Вас энергией и подарит радость на весь день.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
          'https://images.satu.kz/187199392_shokolad-rahat-kazahstanskij.jpg',
          'https://ir.ozone.ru/s3/multimedia-1/c1000/6437953969.jpg'
        ]
      },
      {
        name: 'MAGNUM Яблоко Голден Казахстан',
        description: 'Полное название сорта звучит как Золотое превосходное или Голден делишес. По статистики яблоки сорта голден относят к самым востребованным сортом среди потребителей свежих яблок. Под этот сорт отведены большие площади в США. Происхождение золотых яблок до конца неизвестно.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/magnum-jabloko-golden-kazahstan-101639291/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hf1/65277233987614/magnum-yabloko-golden-kazakhstan-101639291-1.jpg',
          'https://vasha-teplitsa.ru/wp-content/uploads/2019/06/post_593d956a46704.jpg',
          'http://ogorodsadovod.com/sites/default/files/u79/2016/11/golden3.jpg'
        ]
      },
      {
        name: 'SvetoCopy Classic бумага, A4, 500 листов, матовое покрытие',
        description: 'Бумага SVETOCOPY предназначена для повседневной работы в офисе. Подходит для всех классов копировальных аппаратов и принтеров. SvetoCopy – офисная бумага, популярность которой давно доказана повседневным использованием в офисах, школах и дома. Светогорский комбинат, производитель бумаги SvetoCopy – мировой лидер в своей области, гарантирует высокое качество печати на принтерах, копирах и другой технике.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/svetocopy-classic-bumaga-a4-500-listov-matovoe-pokrytie-100843687/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/hf9/33583214919710/svetocopy-a4-80-5-upakovok-belyj-100843687-1-Container.jpg',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h78/33583221997598/svetocopy-a4-80-5-upakovok-belyj-100843687-2-Container.jpg'
        ]
      },
      {
        name: 'Нестор-История мягкая игрушка Нестор, высота 120 см',
        description: 'Мягкая игрушка мишка Нестор создан из искусственного меха, имеет длинный ворс, легко стирается и не теряет своих свойств. В качестве наполнителя используется безопасный, гипоаллергенный и современный материал холлофайбер. На спинке мишки есть молния, которая легко расстёгивается и застёгивается, можно достать весь наполнитель, отложить его, а шкурку смело постирать в стиральной машинке с водой до 40 градусов, после стирки не отжимать мишку в стиральной машине, а нежно и аккуратно отжать шкурку руками. Сушить мишку нужно на сушилке в расправленном виде. Последний шаг - расчесать его расчёской. Мишка как новый! Длина мишки измеряется от макушки головы до кончика хвоста, затем от хвоста до кончиков нижних лап.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/nestor-istorija-mjagkaja-igrushka-nestor-vysota-120-sm-102034389/?c=750000000#!/item',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h4c/hf5/63986439127070.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h13/50024522645534/nestor-istoria-medved-nestor-120-sm-belyj-102034389-1-Container.jpg'
        ]
      }
    ]
  }

}
