# Инструкции за JSON mock данните

Тук са описани всички видове данни от JSON обектите и какво представляват, наподобяват оригиналните почти на 100%.
Това е направено с цел да те улесня в задачат тъй като лично съм се занимавал с bookermaker-и преди време и знам точно какво означават стойностите.

Не е задължително да го ползваш, но мисля че ще ти бъде полезно за да се ориентираш и да се насочиш и също така ако имаш необходимост от референция.

Всеки един от interface-ите по-долу представлява един .json файл от тези в текущата папка.

## event.json

``` TS

interface Event extends PartialEvent {
    /** @see PartialEvent */
    odds: { // коефициентите на мача
        home_win: number; // коефициента за победа на домакините
        draw: number; // коефициент за равенство
        away_win: number; // коефициент за победа на гостите
    };
    bookmakers: Array<string>; /** Това предполагам са bookmaker-ите които предлагат коефициентите по-горе, но трябва да се консултираме с документацията.
    @todo consult info with docs */
};

interface PartialEvent {
    id: number; // id на събитието
    sport: string; // вида на спорта
    league: string; // лигата в която се играе (серия-А, серия-B, La Liga и т.н)
    teams: { // отборите които ще играят
        home: string, // домакините на мача
        away: string, // гостите на мача
    };
    start_time: Date; // часа на започване на мача, според него може да се определи дали е на живо, или предстоятщ
}

```

## odds.json

``` TS

interface Odds extends Markets {
    event_id: number; // id на коефициентите
}

interface Markets {
    market: string; // вида на пазара, в случая е Match Winner, тоест залагаме за това кой ще спешели, но има и други пазари като "First Goal" или "PLayer Stats"
    outcomes: Array<OutcomeStats>; /** @see OutcomeStats */
    updated_at: Date; // последното обновяване на данните за конкретното събитие
}

interface OutcomeStats {
    outcome: string; // краен резултат, победа домакини, равенство или победа гости
    odds: number; // коефициент за събитието
    bookmaker: string; // bookmaker-а, който предлага този коефициент 
}

```

## bookmaker.json 

``` TS

interface Bookmaker {
    id: number; // id на bookmaker-а
    name: string; // име на bookmaker-a
    website: URL; // линк към сайта на bookmaker-а
}

```

## arbitrage.json

``` TS

interface Arbitrage {
    id: number; // id на арбитража
    /** @see PartialEvent */
    event: PartialEvent;
    /** @see Markets*/
    markets: Array<Markets>;
    profit_percentage: number; // печалба от арбитража в процент
    updated_at: Date; // последно обновена 
}

```