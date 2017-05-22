
class PoolObject {
  constructor(object){
    this.available = true;
    this.object = object;
  }
  
  function use(){
    this.available = false;
  }
  
  function available(){
    return this.available === true;
  }
  
  function release(){
    this.available = true;
    
  function useWith(useFunction){
    this.use();
    useFunction(this);
    this.release();
  }
 }
  
class PoolBoy {
  constructor(maxObjects, objectCreator){
   this.maxObjects = maxObjects;
   this.objectCreator = objectCreator;
   this.objectQueue = function* (maxObjects, objectCreator){
     let queue = [];
     while true {
       if (queue.length <= maxObjects){
         let object = objectCreator();
         queue.push(new PoolObject(object)};
       }
      let pooledObject = queue.find(object=>{object.available()})
      if (pooledObject !== undefined){
          pooledObject.use();
          yield pooledObject 
          pooledObject.release();
       }
     }
   }
    
  }


  function getObject(){
   return this.objectQueue.next(); 
 }

}
