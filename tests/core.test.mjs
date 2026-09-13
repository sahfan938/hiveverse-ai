import test from 'node:test';
import assert from 'node:assert/strict';
import {questions,cells,zones,t} from '../dist/content.js';
import {askBuzz} from '../dist/buzz.js';
import {reward,progress,readProgress} from '../dist/state.js';
test('ten valid quiz questions and complete learning specimens',()=>{assert.equal(questions.length,10);for(const q of questions){assert.equal(q[1].length,4);assert.ok(q[1][q[2]]);assert.ok(q[3].length>20);}assert.equal(cells.length,8);assert.equal(Object.keys(zones).length,6);});
test('rewards cannot be farmed by repeating discoveries',()=>{const before=progress.xp;assert.equal(reward('test-discovery',20),true);assert.equal(reward('test-discovery',20),false);assert.equal(progress.xp,before+20);});
test('guide answers queen replacement, honey and context without a network',async()=>{assert.match(await askBuzz('What happens when she dies?','queen'),/replacement/);assert.match(await askBuzz('How is honey created?'),/evaporate|water content/);assert.match(await askBuzz('Tell me more','drone'),/male/);assert.match(await askBuzz('unrelated question'),/I can help/);});
test('missing translation falls back and corrupt storage is harmless',()=>{assert.equal(t('missing','enter'),'Enter the hive');assert.equal(readProgress().xp,0);});
