<script lang="ts">
    import img from '$lib/assets/OffWhiteTransparant.png'
    import {ITEM_DATA, SIZES_DATA} from '../src/routes/data.js'

    const price = ITEM_DATA[0].price;
    const shipping = ITEM_DATA[0].shipping


    //console.log(Object.entries(SIZES_DATA[0]))


// SIZES_DATA.forEach((size) => {
//     document.getElementById("clothingSize")
//     ?.insertAdjacentHTML(
//         "beforeend",
//         `<option value="${Object.keys(size)}" >"${Object.values(size)}" </option>`
//     )
// })
    


</script>

<header>
<h1 class="font-bold text-2xl text-center mt-6 mb-6">BUILDING ARMOUR FOR US</h1>
</header>

<main>

<div class="flex justify-center">
    <img class="scale-90"  src={img} alt="tshirt" />
</div>

<div class="flex-row align-middle margin-auto w-2xl border-1 border-solid p-4 rounded-md mb-8">
    <h3 class="font-bold text-2xl ">{ITEM_DATA[0].collection.toUpperCase()}</h3>
    <p class="mb-4">{ITEM_DATA[0].description}</p>

    <table class="table-auto">
        <tbody>
            <tr>
                <td class="font-bold">Price: </td>
                <td> &euro; {price}</td>
            </tr>
            <tr>
                <td class="font-bold">Shipping: </td>
                <td> &euro; {shipping}</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-128 lg:h-auto lg:w-128 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style="background-image: url('{img}') ;" title="plotting...">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        {ITEM_DATA[0].collection}
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Plot Armour Tee</div>
      <p class="text-gray-700 text-base">{ITEM_DATA[0].description}</p>
    </div>
    <div class="flex items-center">
      <table class="table-auto">
        <tbody>
            <tr>
                <td class="font-bold">Price: </td>
                <td> &euro; {price}</td>
            </tr>
            <tr>
                <td class="font-bold">Shipping: </td>
                <td> &euro; {shipping}</td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
</div>-->

<div class="flex-row align-middle margin-auto w-2xl border-1 border-solid p-4 rounded-md bg-gradient-to-b from-slate-50 to-green-50">
    <h3 class="font-bold text-4xl mb-5 ">PRE-ORDER</h3>
        <form action="" autocomplete="on">
            <label class="font-bold" for="clothingSize">Size:</label><br>
            <select class="rounded-lg form-select" id="clothingSize" name="clothingSize">
                {#each Object.entries(SIZES_DATA[0]) as [key, value] }
                    <option class="rounded-lg" value={key}>{value}</option>
                {/each}
            </select><br>
            <label class="font-bold" for="fname">First name:</label><br>
            <input class="form-input rounded-lg" type="text" id="fname" name="fname"><br>
            <label class="font-bold" for="lname">Last name:</label><br>
            <input class="form-input rounded-lg" type="text" id="lname" name="lname"><br>
            <label class="font-bold" for="phonenumber">Phone number:</label><br>
            <input class="form-input rounded-lg" type="tel" id="phonenumber" name="phonenumber"><br>
            <label class="font-bold" for="street">Streetname:</label><br>
            <input class="form-input rounded-lg" type="text" id="street" name="street"><br>
            <label class="font-bold" for="nr">nr:</label><br>
            <input class="form-input rounded-lg" type="number" id="nr" name="nr"><br>
            <label class="font-bold" for="city">City:</label><br>
            <input class="form-input rounded-lg" type="text" id="city" name="city"><br>
            <label class="font-bold" for="email">Email:</label><br>
            <input class="form-input rounded-lg" type="email" id="email" name="email"><br><br>
            <button class="rounded-lg bg-green-700 p-2 text-white font-bold text-lg" type='submit'>SUBMIT</button>
        </form>

</div>

</main>


