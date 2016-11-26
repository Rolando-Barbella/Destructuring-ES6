const bar = foo()

function test(){
	console.log(
    bar.filter(n => n > 2)
    .join(' ')
  )
}
