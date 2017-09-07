// Создать SPA приложение: список покупок. Необходимо сделать вывод всех покупок,
// возможность добавлять, удалять покупки, отмечать сделаную покупку. 
// Предусмотреть сохранения данных во внутренем хранилище браузера (IndexedDB). 
// Для выполнения используйте чистый JS и AngularJS.

var app = angular.module('app', []);

app.factory('indexedDBFactory', function ($window, $q) {
    var indexedDB = $window.indexedDB;
    var db = null;
    var lastIndex = 0;
    
    var open = function () {
        var deferred = $q.defer();
        var request = indexedDB.open("productData", 1);
        
        request.onupgradeneeded = function (event) {
            db = event.target.result;
            
            event.target.transaction.onerror = indexedDB.onerror;
            
            if (db.objectStoreNames.contains("product")) {
                db.deleteObjectStore("product");
            }
            
            var store = db.createObjectStore("product", {
                keyPath: "id"
            });
        };
        
        request.onsuccess = function (event) {
            db = event.target.result;
            deferred.resolve();
        };
        
        request.onerror = function () {
            deferred.reject();
        };
        
        return deferred.promise;
    };
    
    var getProducts = function () {
        var deferred = $q.defer();
        
        if (db === null) {
            deferred.reject("Indexed DB is not opened");
        } else {
            var transaction = db.transaction(["product"], "readwrite");
            var store = transaction.objectStore("product");
            var products = [];
            
            var keyRange = IDBKeyRange.lowerBound(0);
            var cursorRequest = store.openCursor(keyRange);
            
            cursorRequest.onsuccess = function (event) {
                var result = event.target.result;
                if (result === null || result === undefined) {
                    deferred.resolve(products);
                } else {
                    products.push(result.value);
                    if (result.value.id > lastIndex) {
                        lastIndex = result.value.id;
                    }
                    result.continue();
                }
            };
            
            cursorRequest.onerror = function (event) {
                console.log(event.value);
                deferred.reject("Something went wrong");
            };
        }
        
        return deferred.promise;
    };
    
    var deleteProduct = function (id) {
        var deferred = $q.defer();
        
        if (db === null) {
            deferred.reject("Indexed DB is not opened");
        } else {
            var transaction = db.transaction(["product"], "readwrite");
            var store = transaction.objectStore("product");
            
            var request = store.delete(id);
            
            request.onsuccess = function (event) {
                deferred.resolve();
            };
            
            request.onerror = function (event) {
                console.log(event.value);
                deferred.reject("Todo item couldn't be deleted");
            };
        }
        
        return deferred.promise;
    };
    
    var addProduct = function (productText) {
        var deferred = $q.defer();
        
        if (db === null) {
            deferred.reject("Indexed DB is not opened");
        } else {
            var transaction = db.transaction(["product"], "readwrite");
            var store = transaction.objectStore("product");
            lastIndex++;
            var request = store.put({
                "id": lastIndex,
                "text": productText
            });
            
            request.onsuccess = function (event) {
                deferred.resolve();
            };
            
            request.onerror = function (event) {
                console.log(event.value);
                deferred.reject("Todo item couldn't be added");
            };
        }
        
        return deferred.primise;
    };
    
    return {
        open: open,
        getProducts: getProducts,
        addProduct: addProduct,
        deleteProduct: addProduct
    };
    
});

app.controller('productsController', function ($window, indexedDBFactory) {
    var _this = this;
    _this.products = [];
    
    _this.refreshList = function () {
        indexedDBFactory.getProducts().then(function (data) {
            _this.products = data;
        }, function (err) {
            $window.alert(err);
        });
    };
    
    _this.addProduct = function () {
        indexedDBFactory.addProduct(_this.productText).then(function () {
            _this.refreshList();
            _this.productText = "";
            _this.productText.focus();
        }, function (err) {
            $window.alert(err);
        });
    };
    
    _this.deleteProduct = function (id) {
        indexedDBFactory.deleteProduct(id).then(function () {
            _this.refreshList();
        }, function (err) {
            $window.alert(err);
        });
    };
    
    function init() {
        indexedDBFactory.open().then(function () {
            _this.refreshList();
        });
    };
    
    init();
});