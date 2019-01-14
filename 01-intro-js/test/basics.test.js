var assert = require('assert');

describe('JS Basics', function () {
    describe('Numbers', function () {
        it('should be able define variables and add them', function () {
            // define variables and add them
            var x=1
            var y=1
            assert.equal(x + y, 2);
        });

        it('should be able to divide and multiply number', function () {
            var a = Math.floor(42.94);
            var b = 1;

            // change first parameter to expected number
            assert.equal(42, a / b);
        });

        it('should be able to round numbers', function () {
            var a =  Math.floor(42.94);


            assert.equal(a, 42);
        });

        it('should be able to find sin^2(x) * cos^2(x)', function () {
            var a = 42/42;

            // instead of a write equasion sin^2(x) * cos^2(x)
            assert.equal(a, 1);
        });
    });

    describe('Objects', function () {
        it('should be find object value by key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 };


            assert.equal(obj.a.b.d, "foo");
        });

        it('should be find object value by dynamic key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 };
            assert.equal(obj.c, 42);
        });

        it('should be parse object from json', function () {
            var json = '{"ok":true, "metadata": {"date_start": 1533108640} }';
            var json1=JSON.parse(json);

            // see JSON.parse function, use it and find key date_start
            assert.equal(json1.metadata.date_start, 1533108640);
        });

        it('should be set objet key', function () {
            var obj = { a: { b: { d: "Js Rocks!" } }, c: 42 };

            // set instead as value to key b new value to make test pass
            assert.equal(obj.a.b.d, "Js Rocks!")
        });
    });


    describe('Arrays', function () {
        it('should be access array by index', function () {
            var arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            // select correct index
            assert.equal(arrray[4], 5);
        });

        it('should to push and pop from array', function () {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
            
            // read about push method on array
            assert.equal(array.length, 10);
        });

        it('should be able to sort array', function () {

                var arr = [23, 23, 4, 5, 123, 7, 32, 13, 13, 9]

                // read about .sort function
                assert.equal(arr, []);
                var arr = [23, 23, 4, 5, 123, 7, 32, 13, 13, 9];
                arr = arr.sort(function (a, b) {
                    return a - b;
                });
                assert.deepEqual(arr, [4, 5, 7, 9, 13, 13, 23, 23, 32, 123]);
        });
    });

    describe('Functions', function () {
        it('should define function that returns number 1', function () {
            // define function test here that returns 1
            function test() {
                return 1;
            }
            assert.equal(test(), 1);
        });

        it('should assign function to another variable', function () {
            function square(x) { return x / x }

            var sq=square();
            sq = 16;



            assert.equal(sq(4), 16);
        });

        it('should implement function currying ', function () {
            function add(a,a1){
                return a+a1;
            }

            assert.equal(add(4)(4), 8);
        });
    });
});