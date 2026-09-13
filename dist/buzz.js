import {zones} from './content.js';
// Replace this adapter with a server endpoint to connect an LLM. Never expose API keys in the browser.
export async function askBuzz(question,context='queen'){
 const q=question.toLowerCase();
 if(/die|dies|dead|queenless/.test(q))return 'If a queen dies, workers may raise a replacement from a very young female larva by feeding her abundantly with royal jelly. Without suitable young brood, the colony cannot simply create a new queen.';
 if(/how many|eggs.*day/.test(q))return 'During peak laying conditions, a queen may lay over 1,000 eggs a day. The rate depends on her health, season and colony conditions.';
 if(/queen.*creat|creat.*queen|become.*queen|royal/.test(q))return 'A queen develops from a fertilized egg, like a worker. Workers raise selected young larvae in queen cells and feed them a rich royal-jelly diet throughout larval development.';
 if(/live|lifespan|long/.test(q))return /queen/.test(q)?'A queen can live for several years, although many are replaced sooner. Her lifespan varies with health and colony conditions.':'Summer workers often live for only several weeks. Workers reared for winter can survive for months; lifespan depends on season and workload.';
 if(/honey|nectar/.test(q))return 'Workers collect nectar, transfer it to receiver bees, and process its sugars with enzymes. Spreading nectar and fanning reduce its water content. The colony stores ripe honey in wax-capped cells.';
 if(/important|pollinat|protect|flowers/.test(q))return 'As bees visit flowers, they transfer pollen, helping plants produce seeds and fruit. Honey bees are valuable crop pollinators, and diverse native pollinators are vital too. Grow locally appropriate flowers and protect nesting habitat.';
 if(/larva|pupa|cycle|egg/.test(q))return 'A honey bee develops through egg, larva, pupa and adult stages. Worker development typically takes about 21 days from egg to emergence. Explore each stage in Cell Explorer.';
 const zone=Object.keys(zones).find(k=>q.includes(k));
 if(zone)return zones[zone].description+' '+zones[zone].facts.join(' ');
 if(/she|her|tell|more|role|this|pheromone|control/.test(q))return zones[context]?.description+' '+zones[context]?.facts.join(' ');
 return 'I can help with bee roles, the life cycle, honey, pollination and queen replacement. Try â€œHow is honey made?â€ or select a hive zone and ask â€œTell me more.â€';
}

