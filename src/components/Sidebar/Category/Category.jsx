import Input from '../../Input'

export default function Category({handleChange}) {
    return (
      <div>
        <h2 className="text-2xl mb-1 mt-3">Category</h2>
        <div className="flex flex-col">
        <label>
          <input 
          onChange={handleChange}
          type="radio" 
          value=""
          name='cate'
          />
          <span> All</span>
        </label>
        <Input
        handleChange={handleChange}
        value= "sneakers"
        title = "Sneakers"
        name="cate"
        />

        <Input
        handleChange={handleChange}
        value= "flats"
        title = "Flats"
        name="cate"
        />

        <Input
        handleChange={handleChange}
        value= "heels"
        title = "Heels"
        name="cate"
        />
    
      </div>
    </div>
    )
  }
  
