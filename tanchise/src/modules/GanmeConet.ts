import Food from "./Fool";
import Snake from "./Snake";
import ScroePanel from "./ScroePanel";
			/**
			 * * 游戏控制器  GameControl
			 * *也就是在此类内操作其他类 进行游戏
			 * !Food       食物    坐标  是一个食物重合后刷新
			 * !Snake      蛇      蛇头坐标与食物坐标重合 食物刷新  记分牌刷新
			 * !ScroePanel 记分牌  分数提升等级 等级提升蛇移动速度
			 * 			蛇移动 根据方向来进行驱动     
							ArrowUp      上   top减少
							ArrowDown    下   top增加
							ArrowLeft    左   left减少
							ArrowRight   右   left增加
				*/

		class GameControl{
					food:Food
					snake:Snake
					scroePanel:ScroePanel
					//用于记录用户键盘按下 后面参与蛇移动方向
					direction:string=''
					//用于记录游戏的开始与结束
					Isinfo:boolean=true
					constructor(){
      				this.food=new Food()
							this.snake=new Snake() 
							this.scroePanel=new ScroePanel()
							this.init()
					}
					//键盘按下的响应函数
					KEYUP=(event:KeyboardEvent):string=>this.direction=event.key
					//游戏初始化，调用即开始
					init():void{
							//绑定键盘事件
							document.addEventListener('keydown',this.KEYUP)
							this.run()
					}
					//蛇移动
			  	MOVE():void{
					    //获取蛇当前坐标
							let {X,Y} = this.snake
							//根据direction进行方向移动
							switch(this.direction){
									case 'ArrowUp':Y-=10;break
									case 'ArrowDown':Y+=10;break
									case 'ArrowLeft':X-=10;break
									case 'ArrowRight':X+=10;break
							}
							//监测蛇是否吃到食物
							this.monitoring(X,Y)
							//移动身体
							this.snake.moveBody()
							//搭配throw与Snake类 判断蛇是否撞墙
							try {
								this.snake.X=X
								this.snake.Y=Y
							} catch (error:any) {
								alert(error.message+'会不会玩啊你')
								//停止游戏
								this.Isinfo=false
							}
					}
					run():void{
							this.MOVE()
							const times=300-(this.scroePanel.level-1)*30
							this.Isinfo&&setTimeout(this.run.bind(this),times)
					}
					//函数用于监测蛇是否吃到食物
					monitoring(x:number,y:number):void{
						//坐标重叠
					    if(this.food.X==x && this.food.Y==y){
					        //食物坐标重置
									this.food.chageFloo()
									//分数增加
									this.scroePanel.addScore()
									//蛇体增加
									this.snake.addBody()
					    }
					}
			}

export default GameControl