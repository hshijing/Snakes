// 定义记分牌的类

       class ScroePanel{
			    //定义初始值
			    score=0 //分数
			    level=1 //等级
          //用来限制最高等级 增加可扩展性
					MaxLevel:number
					//用来表示升级所需分数
					MaxScore:number
					//获取页面元素
					ScoreHtml:HTMLElement
					LevelHtml:HTMLElement
					                 // ES6语法  默认参数
					constructor(MaxLevel=10,MaxScore=10){
					    this.ScoreHtml=this.GetHemlElement('score')
					    this.LevelHtml=this.GetHemlElement('level')
							this.MaxLevel=MaxLevel
							this.MaxScore=MaxScore
					}
					//获取页面元素
					GetHemlElement(id:string):HTMLElement{return document.getElementById(id)!}
					//增加分数  分数到10升一级 
					addScore():void{
					    this.ScoreHtml.innerHTML=`${++this.score}`
							if(this.score%this.MaxScore===0){
							    this.LevelUpdata()
								}
					}
					//等级提升  最高限制在10级 等级与蛇移动速度挂钩
					LevelUpdata():void{
              if(this.level<this.MaxLevel){
					      this.LevelHtml.innerHTML=`${this.level++}`
						}
					}
			}		
	export default ScroePanel