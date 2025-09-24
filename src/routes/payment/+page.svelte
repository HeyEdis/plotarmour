<script lang="ts">

    // const storedFirstname = localStorage.getItem("fname");
    // const storedLastname = localStorage.getItem("lname"); 
    // const storedAmount = localStorage.getItem("amount");
    //const fullName = storedFirstname + " " + storedLastname;
    //const mededeling : string;

    // if (storedAmount != null){
    //     const price = parseInt(storedAmount) * 40;
    // }

    console.log(JSON.parse(localStorage.getItem("fname") || "''"))
    // if (storedFirstname != null && storedLastname != null)
    //     const mededeling = storedFirstname + storedLastname + (Math.random()*10)
</script>

<header>
<h1 class="font-bold text-2xl text-center mt-6 mb-6">BUILDING ARMOUR FOR US</h1>
</header>

<main>
    <div class="flex align-middle justify-center border-1 border-gray-200 bg-gray-200 m-28 rounded-2xl shadow-lg shadow-gray-100">
        <table>
            <tbody>
                <tr>
                    <td class="font-bold">Fullname:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="font-bold">Amount:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="font-bold">Discount:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="font-bold">Pay to:</td>
                    <td>BE ...</td>
                </tr>
                <tr>
                    <td class="font-bold">Mededeling:</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</main>