  //定义一个蛇
	    class Snake{
				  //获取snake 后面吃分了直接追加一个div
				  elementSanke:HTMLElement
				  //表示蛇头
			    SankeTop:HTMLElement
          //表示蛇身(包含蛇头)
					SnakeBody:HTMLCollectionOf<HTMLElement>
					//边界
					LeftWallBoundaries:number=0
					TopWallBoundaries:number=290
					constructor(){
						  this.elementSanke=document.querySelector('#snake')!
						  //获取蛇容器的第一个div当作蛇头
					    this.SankeTop = document.querySelector('#snake>div')!
							//获取蛇身
							this.SnakeBody=this.elementSanke.getElementsByTagName('div')
					}
			    //获取蛇头坐标
					get X():number{return this.SankeTop.offsetLeft}
					get Y():number{return this.SankeTop.offsetTop}
					//用于判断蛇坐标是否需要改变
					UpdataOrNoUpdata(newValue:number,oldValue:number){
					  if(oldValue===newValue) return
					}
					//用于判断蛇是否撞墙
					WallGameOver(LeftBorder:number,RightBorder:number,val:number):void{
					   if(val<LeftBorder||val>RightBorder){
						   throw new Error('撞墙了老登')
						}
					}
					//设置蛇头坐标
					set X(val:number){
						this.UpdataOrNoUpdata(this.X,val)
						this.WallGameOver(this.LeftWallBoundaries,this.TopWallBoundaries,val)
						this.SnakeTurnLift(val)
						this.chekHerBody()
						this.SankeTop.style.left=val+'px'
					}
					set Y(val:number){
						this.UpdataOrNoUpdata(this.Y,val)
						this.WallGameOver(this.LeftWallBoundaries,this.TopWallBoundaries,val)
						this.SnakeTurnLift(val)
						this.chekHerBody()
						this.SankeTop.style.top=val+'px'
					}
					//吃分增加身体
					addBody():void{
						  //insertAdjacentHTML  接收两个参数   把div添加到elementSanke前面
					    this.elementSanke.insertAdjacentHTML('beforeend',"<div></div>")
					}
					/**
					 * *身体跟随移动的方法 
					 * !核心原理：第二个div移动到蛇头，第三个移动到第二个
					 * *循环从后往前遍历，避免第二个移动后，第三个找不到位置，也就是i丢失
					 */
					moveBody():void{
					    for(let i=this.SnakeBody.length-1;i>0;i--){
						    //获取前边div的位置
								let FrontDivX=(this.SnakeBody[i-1] as HTMLElement).offsetLeft;
								let FrontDivY=(this.SnakeBody[i-1] as HTMLElement).offsetTop;
							  (this.SnakeBody[i] as HTMLElement).style.left=FrontDivX+'px';
							  (this.SnakeBody[i] as HTMLElement).style.top=FrontDivY+'px';
						  }
					}
					//边界处理 不可发生掉头  也就是val值 如果正向就应该+ 就会比原先的x值大
					SnakeTurnLift(oldval:number):void{
					  if(this.SnakeBody[1]&&(this.SnakeBody[1] as HTMLElement).offsetLeft===oldval){
						  oldval>this.X?(oldval=this.X-10):(oldval=this.X+10)					
						}
					}
					SnakeTurnTop(oldval:number):void{
					  if(this.SnakeBody[1]&&(this.SnakeBody[1] as HTMLElement).offsetLeft===oldval){
						  oldval>this.Y?(oldval=this.Y-10):(oldval=this.Y+10)
						}
					}
					//检查头和身体是否相撞
					chekHerBody():void{
					     //检查蛇头与身体坐标是否发生重叠
							 for(let i=4;i<this.SnakeBody.length;i++){
							  if(this.X===this.SnakeBody[i].offsetLeft&&this.Y===this.SnakeBody[i].offsetTop){
								  //游戏结束
									throw new Error("相撞了老登")
								}
							}
					}
			}
			export default Snake