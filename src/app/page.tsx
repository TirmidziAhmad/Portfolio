export default function Home() {
  return (
    <div>
      <section id='hero' className='flex flex-col justify-center items-center h-[100vh]'>
        <h1 className='text-6xl md:text-[180px] font-semibold --font-geist-sans'>TIRMIDZI</h1>
        <p className='text-slate-400 text-lg md:text-xl'>FRONT END ENGINEER</p>
        <h1 className='text-6xl md:text-[180px] font-semibold'>AHMAD</h1>
      </section>
      <section className='flex flex-col justify-center items-center h-[50vh]'>
        <h2 className='text-lg md:text-6xl'>Tirmidzi Ahmad is Indonesian</h2>
        <h2 className='text-lg md:text-6xl'>Front End Engineer,</h2>
        <h2 className='text-lg md:text-6xl text-slate-500'>Who turns creativity</h2>
        <h2 className='text-lg md:text-6xl text-slate-500'>into functionality</h2>
      </section>
      <section id='tech-stack' className='h-[90vh] flex items-center justify-center'>
        <div className='grid grid-cols-5 grid-rows-5 gap-4 justify-center items-center border-white text-center '>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div className='col-start-5 row-start-2'>6</div>
          <div className='col-start-4 row-start-2'>7</div>
          <div className='col-start-5 row-start-3'>8</div>
          <div className='col-start-5 row-start-4'>9</div>
          <div className='col-start-4 row-start-4'>10</div>
          <div className='col-start-4 row-start-3'>11</div>
          <div className='col-start-1 row-start-2'>12</div>
          <div className='col-start-1 row-start-3'>13</div>
          <div className='col-start-1 row-start-4'>14</div>
          <div className='col-start-2 row-start-2'>15</div>
          <div className='col-start-2 row-start-3'>16</div>
          <div className='col-start-2 row-start-4'>17</div>
          <div className='col-start-3 row-start-4'>18</div>
          <div className='row-span-2 col-start-3 row-start-2 uppercase'>
            Tech Stack <br />
            that i use <br />
            for development
          </div>
        </div>
      </section>

      <section id='my-work'>Works</section>
    </div>
  );
}
