# Projekt TypeScript & Angular
En webbapplikation skapad för ett fiktivt universitet utvecklat med [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10. Användaren kan se alla universitets
kurser och skapa sitt egna ramschema genom att lägga till de önskade kurserna. För att hitta rätt på en specifik kurs kan man söka efter kursnamnet eller kurskoden i ett sökfält. Det går även att filtrera efter ämna genom att välja det önskade nämnet i en select-lista. `Kurskod`, `kursnamn`, `poäng` och `ämne` går att klicka på för att sortera i stigande och fallande ordning. Ramschemat går att redigera genom att ta bort kurser eller rensa listan helt, det totala antalet kurser och högskolepoängen står även utskrivet för sitt individuella ramschemat. 


## Användning av projektet
1. Klona repo
```bash
git clone https://github.com/rare2400/projekt-ts.git
cd projekt-ts
```

3. Installera paket
```bash
npm install
```

4. Starta utvecklingsserver
```bash
ng serve
```
4. Öppna `http://localhost:4200/` i webbläsaren

5. Bygg färdigt projekt
```bash
ng build
```

## Verktyg
- **Angular**: Skapa components, services, signals etcetera
- **Angular Material**: Användargränssnitt som färdiga komponenter hämtas ifrån
- **TypeScript**: Statiskt typat programmeringsspråk vid utveckling av filtrering och sortering
- **Git**: Versionshantering av kod
- **[Json-fil](https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json)**

## Funktionalitet
- Se kurser för ett universitet hämtade ur en JSON-fil
- Filtrera och sortera lista över kurser
  - Filtrering i sökformulär
  - Filtrering genom specifikt ämne i select-lista
  - Sortering fallande & stigande vid tryck på rubrik
- Skapa sitt egna ramschemat som sparas i webbläsaren
- Redigera ramschemat genom att ta bort kurs eller rensa hela listan
- Responsiv design

## Utökad funktionalitet för överbetyg
- Mer utvecklat användargränssnitt
- Paginering
- Fler undersidor - en startsida med ytterligare komponenter

## Skapad av
Uppgift i kursen programmering i TypeScript     
Webbutveklingsprogrammet, Mittuniversitetet     
Ramona Reinholdz     
[rare2400@student.miun.se](rare2400@student.miun.se)
