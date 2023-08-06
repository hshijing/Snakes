   //定义类 食物Food
	 /**
					 * *封装一个随机位置
					 * !食物的位置最小是0，最大是 游戏区-边框-食物大小=290
					 * ! 注意：移动一次是一格，蛇一格是10px 所有食物位置只能是十的正倍数
					 * *function  randomLocation
					 * @returns {number}  X   随机数 
					 * */
				class Food{
						//表示食物所对应的元素
						Foodelement:HTMLElement
						constructor(){
							//加个叹号表示数据不可能为null 获取页面的元素并赋值
								this.Foodelement=document.querySelector('.floo')!
						}
				    //获取食物的坐标  用于与蛇头重合表示吃到了
					  get X():number{return this.Foodelement.offsetLeft}
						get Y():number{return this.Foodelement.offsetTop}
						//随机生成食物
						randomLocation():number{
								const X:number= Math.floor(Math.random()*29)*10
							  return X
						}
					//调用方法修改食物的位置 在上个食物被吃掉后调用，也就是蛇头坐标与食物坐标重合后
					  chageFloo():void{
						    this.Foodelement.style.left=this.randomLocation()+'px'
							  this.Foodelement.style.top=this.randomLocation()+'px'
						}
		      }
					//暴露模块
	export default Food
						