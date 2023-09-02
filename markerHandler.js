AFRAME.registerComponent({
    getDistance: function(elA,elB){
        return elA.object3D.position.distanceTo(elB.object3D.position)
    },
    getModelGeometry:function(){
        var barcodes = Object.keys(models)
        for(var barcode of barcodes){
            if(models[barcode].model_name === modelName){
                return{
                    position:models[barcode]["placement_position"],
                    rotation:models[barcode]["placement_rotation"],
                    scale:models[barcode]["placement_scale"],
                    model_url:models[barcode]["model_url"]
                }
            }
        } 
    },
    placeTheModel:function(modelName,models){
        var isListContainModel = this.isModelPresentInArray(modelList,modelName);
        if(isListContainModel){
            var distance = null;
            var marker1 = document.querySelector(`#marker-base`)
            var marker2 = document.querySelector(`#marker-${modelName}`)

            distance = this.getDistance(marker1,marker2)
            if(distance<1.25){
                var modelEl = document.querySelector(`#${modelName}`)
                modelEl.setAttribute("visible",false)
           
                var isModelPlaced = document.querySelector(`#model-${modelName}`)
                if(isModelPlaced === null){
                    var el = document.createElement("a-entity")
                    var modelGeometry = this.getModelGeometry(models,modelName)
                    el.setAttribute("id",`model-${modelName}`)
                }
            
        }
        }
    }
})