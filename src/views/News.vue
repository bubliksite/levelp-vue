<template>
  <div class="container mb-5">
    <h1 class="mt-3 mb-0">News</h1>
    <small class="text-muted"><i class="bi bi-eye"></i> {{ counter }}</small>
    <Article
      v-for="article in articles"
      :key="article.id"
      :article="article"
      @clicked="addCounter"
    />
  </div>
</template>

<script>
  import Article from '../components/Article'

  export default {
    name: 'News',
    components: {Article},
    data: function () {
      return {
        time: new Date().toLocaleDateString(),
        counter: 0,
        articles: [
          {
            id: 1,
            title:
              'Tokyo Olympics: Simone Biles out of individual all-around final',
            excerpt:
              "American gymnast and four-time Olympic gold medallist Simone Biles has withdrawn from Thursday's " +
              'individual all-around final in Tokyo. Biles, the most successful US gymnast of all time, said ' +
              "she had to focus on her mental health after pulling out of the women's team final on Tuesday.",
            text: `<p>When Simone Biles - four-time Olympic gold medallist, multiple world champion and arguably the greatest gymnast of all time - withdrew from the team and all-around events at the Tokyo Olympics, it was headline news across the US and the world.</p><p>The American, who is a sexual assault survivor, spoke about the importance of preserving her mental health and the need to "protect our minds and our bodies," adding: "We are people, at the end of the day."</p><p>Biles' decision drew praise from many, but there were others who accused her of using mental health as an excuse for a below-standard performance.</p><p>For many athletes, past and present, Biles' honesty could change the way mental health is dealt with in sport.</p>`
          },
          {
            id: 2,
            title: 'China building nuclear missile silo field, scientists say',
            excerpt:
              'China is building a nuclear missile silo field in the west of the country, US scientists say. It is ' +
              'the second new silo field reported to be under construction in western China in the last two months.',
            text: `<p>Satellite images from Xinjiang province suggest the site could house about 110 silos when it is finished, says the report from the Federation of American Scientists (FAS).</p><p>US defence officials have expressed concern about China's nuclear build-up.</p><p>It is the second new silo field reported to be under construction in western China in the last two months.</p><p>Last month, the Washington Post newspaper reported 120 silos spotted at a site in a desert area in Yumen, in Gansu province.</p><p>The FAS said in its report on Monday that the new site at Hami, about 380 km (240 miles) north-west of Yumen, was at a much earlier stage of development.</p><p>In 2020 the Pentagon said China was set to double its stockpile of nuclear warheads, from a low base.</p><p>The news comes as the US and Russia prepare for arms control talks.</p><p>The talks, between US Deputy Secretary of State Wendy Sherman and Russian Deputy Foreign Minister Sergei Ryabkov, are being seen as a first step towards reviving stalled negotiations on reducing nuclear arms.</p><p>But China has so far not taken part in arms control negotiations.</p><p>The US Strategic Command, the part of the Department of Defense responsible for strategic deterrence, voiced its concern about the report in a tweet.</p>
                    <p>"This is the second time in two months the public has discovered what we have been saying all along about the growing threat the world faces and the veil of secrecy that surrounds it," it said.`
          }
        ]
      }
    },
    methods: {
      addCounter() {
        this.counter++
      }
    }
  }
</script>

<style scoped></style>
