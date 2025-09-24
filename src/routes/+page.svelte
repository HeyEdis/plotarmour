<script lang="ts">
    import img from '$lib/assets/OffWhiteTransparant.png'
    import {ITEM_DATA, SIZES_DATA} from '../routes/data.js'

    const price = ITEM_DATA[0].price;
    const shipping = ITEM_DATA[0].shipping;
    


    //console.log(Object.entries(SIZES_DATA[0]))


// SIZES_DATA.forEach((size) => {
//     document.getElementById("clothingSize")
//     ?.insertAdjacentHTML(
//         "beforeend",
//         `<option value="${Object.keys(size)}" >"${Object.values(size)}" </option>`
//     )
// })
    
    const handleClick = () => {
        document.getElementById('preorderForm')?.scrollIntoView();
    }

    const dataToLocalStorage = (event : Event) => {
        event.preventDefault();

        const fname = (document.getElementById("fname") as HTMLInputElement).value;
        const lname = (document.getElementById("lname") as HTMLInputElement).value; 
        const amount = (document.getElementById("amount") as HTMLInputElement).value;

        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("amount", amount);

        console.log(fname)
    }


</script>

<header>
<h1 class="font-bold text-2xl text-center mt-6 mb-6">BUILDING ARMOUR FOR US</h1>
</header>

<main>
<div class="flex border-1 border-gray-200">
  <!--  <p class="mr-4 text-sm text-gray-600 flex items-start">
        Homage Collection
      </p>-->
<div class="flex justify-center">
    <img class="scale-90" src={img} alt="tshirt" />
</div>

<div class="flex-row margin-auto w-2xl p-4 rounded-2xl border-1 border-gray-200 m-32 shadow-lg shadow-gray-50 " >
    <h3 class="font-bold text-2xl mt-28 mb-1">{ITEM_DATA[0].collection.toUpperCase()}</h3>
    <p class="mb-25 italic">{ITEM_DATA[0].description}</p>

    <table class="table-auto">
        <tbody>
            <tr>
                <td class="font-bold pr-25">Price </td>
                <td class="font-bold">Shipping </td>
            </tr>
            <tr>
                <td class="text-4xl">&euro; {price}</td>
                <td class="text-4xl">&euro; {shipping}</td>
            </tr>
        </tbody>
    </table>
    <button class="rounded-lg bg-green-700 shadow-lg shadow-gray-220 p-2 text-white font-bold text-lg mt-68" onclick={handleClick} type='button'>PREORDER</button>
</div>
</div>

<div id="preorderForm" class="flex items-stretch justify-center border-1 border-gray-200 p-6 m-11 rounded-2xl w-auto bg-gradient-to-t from-slate-50 to-green-50">
    <div class="flex-row">
    <h3 class="font-bold text-4xl mb-5 ">PRE-ORDER</h3>
        <form onsubmit={dataToLocalStorage} action="" autocomplete="on">
            <label class="font-bold" for="clothingSize">Size:</label><br>
            <select class="rounded-lg form-select mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" id="clothingSize" value="" name="clothingSize">
                {#each Object.entries(SIZES_DATA[0]) as [key, value] }
                    <option class="rounded-lg w-md h-10" value={key}>{value}</option>
                {/each}
            </select><br>
            <label class="font-bold" for="amount">Amount:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="number" value="1" min="0" max="10" id="amount" name="amount"><br>
            <label class="font-bold" for="fname">First name:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="text" id="fname" name="fname"><br>
            <label class="font-bold" for="lname">Last name:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="text" id="lname" name="lname"><br>
            <label class="font-bold" for="phonenumber">Phone number:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="tel" id="phonenumber" name="phonenumber"><br>
            <label class="font-bold" for="street">Streetname:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="text" id="street" name="street"><br>
            <label class="font-bold" for="nr">Nr:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="number" id="nr" min="0" name="nr"><br>
            <label class="font-bold" for="city">City:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="text" id="city" name="city"><br>
            <label class="font-bold" for="email">Email:</label><br>
            <input class="form-input rounded-lg mb-3 w-md h-10 focus:border-green-600 focus:border-2 focus:outline-none focus:ring-0" type="email" id="email" name="email"><br>
            <button class="rounded-lg bg-green-700 shadow-lg shadow-gray-220 p-2 text-white font-bold text-lg" type='submit'>SUBMIT</button>
        </form>
</div>
</div>

</main>


