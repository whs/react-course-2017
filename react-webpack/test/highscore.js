import {expect} from 'chai';
import Storage from '../src/Highscore/storage';

describe('HighScoreStorage', function(){
	it('has highscore attribute', function(){
		let storage = new Storage();
		expect(storage.highscore).to.been.an('array');
	});

	describe('#add', function(){
		it('add score to the storage', function(){
			let storage = new Storage();
			storage.add('Test', 10);
			expect(storage.highscore).to.eql([
				{name: 'Test', score: 10},
			]);
		});

		it('sort score from most to least', function(){
			let storage = new Storage();
			storage.add('Test1', 30);
			storage.add('Test2', 10);
			storage.add('Test3', 20);
			expect(storage.highscore).to.eql([
				{name: 'Test1', score: 30},
				{name: 'Test3', score: 20},
				{name: 'Test2', score: 10},
			]);
		});
	});

	describe('#cap', function(){
		it('cap the highscore table to given value', function(){
			let storage = new Storage();
			for(let i = 1; i <= 10; i++){
				storage.add('Test', i);
			}
			storage.cap(5);

			expect(storage.highscore).to.eql([
				{name: 'Test', score: 10},
				{name: 'Test', score: 9},
				{name: 'Test', score: 8},
				{name: 'Test', score: 7},
				{name: 'Test', score: 6},
			]);
		});

		it('do nothing if the highscore less than the length', function(){
			let storage = new Storage();
			for(let i = 1; i <= 5; i++){
				storage.add('Test', i);
			}
			storage.cap(100);

			expect(storage.highscore).to.eql([
				{name: 'Test', score: 5},
				{name: 'Test', score: 4},
				{name: 'Test', score: 3},
				{name: 'Test', score: 2},
				{name: 'Test', score: 1},
			]);
		});
	});
});
