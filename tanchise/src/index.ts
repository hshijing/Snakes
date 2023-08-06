import './index.less'		
import GameControl from './modules/GanmeConet'
	
new GameControl()


document.querySelector('.but')?.addEventListener('click',()=>{
   const g=new GameControl()
	  g.scroePanel.ScoreHtml.innerHTML=0+''
	  g.scroePanel.LevelHtml.innerHTML=0+''
		g.scroePanel.score=0
		g.scroePanel.level=1
 
})
