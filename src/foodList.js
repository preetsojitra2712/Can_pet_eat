const foodList = [
  {
    name: 'Apples',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Apple slices make a delicious, healthy snack for your dog and can help keep your dog's teeth clean and their breath fresh. However, the core of the apple and the apple seeds especially can be harmful to dogs. Apple seeds contain a small amount of cyanide which is released when they're broken or chewed. Just swallowing a few apple pits is unlikely to cause your dog any harm, but it's best to remove them and avoid the risk. Every animal's tolerance for specific foods is a bit different so, to minimize a possibility of diarrhea or stomach upset, it is best to limit apples to a special treat only.",
    tips:
      'Cut up the apple into easily digestible slices, remove the seeds, stem and core and only feed a modest amount'
  },
  {
    name: 'Avocados',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Although small amounts of the mushy inside of the avocado won't harm your dog it might cause an upset stomach due to the fact that dogs don't process plant-based foods as well as humans. However, be aware that the avocado's pit and skin contains an oil-soluble compound known as Persin which is quite toxic to animals and humans. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian. You should take them to the vet immediately if they choke on the pit or seed.",
    tips: 'Stick to small dog-friendly portions, remove the pit and peel or skin'
  },
  {
    name: 'Bananas',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Bananas are a wonderful treat for your dog with many health benefits as long as they're  ripe, peeled and sliced into small pieces. Filled with essential vitamins and valuable nutrients, if fed in moderation they can be beneficial to your dog's health, skin and coat. However, since they contain high sugar content and high levels of calories they should only be a special treat to avoid weight gain or temporarily upsetting your dog's bowels.",
    tips:
      'Always remove the peel, only feed ripe bananas, slice up the banana into small pieces, modest portions'
  },
  {
    name: 'Coconuts',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Feeding your dog some coconut meat is completely safe and the antioxidants and vitamins it contains can support your dog's overall health. Coconut contains lauric acid which provides numerous health benefits such as preventing all sorts of infections, improving digestion, aiding in a healthier skin and coat and reducing allergies. Coconut should always be introduced gradually to prevent stomach upsets.",
    tips: 'Cut it up to avoid a possibility of choking'
  },
  {
    name: 'Coconut Oil',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Coconut oil is absolutely safe for your dog to consume and is unlikely to cause any negative reactions. Coconut oil contains lauric acid which provides numerous health benefits such as preventing all sorts of infections, improving digestion, aiding in a healthier skin and coat and reducing allergies. You can feed coconut oil, as a daily supplement, mixed in with meals. Coconut oil should be introduced gradually into your dog's diet to avoid loose stools and stomach upsets.",
    tips: 'Opt for virgin, unrefined, non-GMO and hexane-free coconut oil'
  },
  {
    name: 'Coconut Milk',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'Coconut milk is not toxic to dogs and may even offer a few health benefits. However, coconut milk is often overly processed and can contain several additives so it is best to only feed your dog small amount of unsweetened coconut milk or choose other coconut products like natural coconut water, which is rich in electrolytes and nutrients, and coconut oil, which is full of healthy fats.',
    tips: "Opt for natural, unsweetened coconut milk, don't overfeed"
  },
  {
    name: 'Coconut Water',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Natural coconut water without additives like sugar is safe for your dog to consume. It is not toxic and is unlikely to cause any negative reactions. Young coconuts contain water that is relatively low in calories and full of valuable nutrients, especially potassium and magnesium. It can help balance out your dog's  electrolytes and will also hydrate your pet. Coconut water should be introduced gradually into your dog's diet to see how their system reacts to it.",
    tips: 'Introduced gradually, provide only natural coconut water, without additives'
  },
  {
    name: 'Strawberries',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Strawberry is a fruit that makes for a delicious, healthy snack for your dog. Having anti-inflammatory and even anti-cancer properties can benefit your canine's health. Strawberries contain sugar, which some dogs have trouble handling. Any dog who eats too many can get an upset stomach and suffer from some gastrointestinal upset. They're best consumed in moderation, while you should ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Wash and clean strawberries, remove the stems, cut them into small bits or puree them'
  },
  {
    name: 'Blackberries',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Blackberries are not toxic to dogs. There is nothing wrong with sharing some as an occasional treat. Any dog who eats too many can get an upset stomach and suffer from some gastrointestinal upset. They're best consumed in moderation, while you should ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Small amount'
  },
  {
    name: 'Raspberries',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Raspberry is a fruit that makes for a delicious, healthy snack for your dog. Having anti-inflammatory and even anti-cancer properties can benefit your canine's health. Raspberries contain sugar, which some dogs have trouble handling. Any dog who eats too many can get an upset stomach and suffer from some gastrointestinal upset. They're best consumed in moderation, while you should ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Wash and clean raspberries, remove the stems, cut them into small bits or puree them'
  },
  {
    name: 'Pomegranate',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Pomegranate are not poisonous, however tummy troubles are a real possibility. Any dog who eats too many can get an upset stomach and suffer from some gastrointestinal upset. They're best consumed in moderation, while you should ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Small amount'
  },
  {
    name: 'Blueberries',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'Blueberries are safe for you dog, whether you feed them fresh, frozen, dried, or mashed. Blueberries are rich in antioxidants, contain high amounts of vitamin C, fiber, and phytochemicals. As long as you portion the treat appropriately and are aware of any issues to watch out for, blueberries can carry tremendous health benefits for your dog.',
    tips: 'Limit the amount'
  },
  {
    name: 'Cherries',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Small amount of unprocessed cherries are safe for you dog. This fruit has antioxidants, natural melatonin, vitamins and lots of nutrients. However, the pit of the fruit contains small amounts of cyanide so it' best to remove the pits before feeding them to a dog.",
    tips: 'Limit the amount, remove stems, pit and leaves'
  },
  {
    name: 'Olives',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Small amounts of olives without the pit are safe for you dog. Canned olive consumption should be limited. And it's really best to avoid salty brine as well as other questionable ingredients.",
    tips: 'Limit the amount, remove the pit'
  },
  {
    name: 'Kiwi',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A reasonable amount of kiwi won't be harmful to your dog. Kiwi is high in potassium and provides your dog with vitamin C. However, keep in mind that fruits aren't a necessary part of any dog's diet and there is always a possibility of diarrhea and your dog's stomach may not fully agree.",
    tips: 'Limit portions, remove the brown outer skin, cut it up into bite-size pieces'
  },
  {
    name: 'Watermelons',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Watermelon makes for an excellent treat for your dog. It's not only nutritious, but also hydrating and low in calories. This juicy treat is safe for your dog to eat and helps keep your hound hydrated. Limit how much watermelon your dog consumes because too much watermelon can contribute to loose stools or diarrhea.",
    tips: 'Remove seed and rind, cut it up into bite-size pieces'
  },
  {
    name: 'Honeydew melons',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'Honeydew melons are a wonderful treat for your dog with many health benefits. They are a refreshing treat and provide the nutritional benefits of iron, vitamin C and antioxidant. With that being said, canines generally do not process fruits as well as humans so limit frequency and portion size.',
    tips: 'Remove seed and rind, cut it up into bite-size pieces'
  },
  {
    name: 'Cantaloupes',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'Cantaloupes are a wonderful treat for your dog with many health benefits. They are filled with vitamin C, vitamin A, antioxidants and anti-inflammatories. With that being said, canines generally do not process fruits as well as humans so limit frequency and portion size.',
    tips: 'Remove seed and rind, cut it up into bite-size pieces'
  },
  {
    name: 'Chocolate',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Chocolate is poisonous to dogs and should never be considered as a reward. Everything from seizures to an irregular heartbeat to internal bleeding can develop when your dog eats chocolate. Chocolate is toxic mostly because of its theobromine content, which dogs are unable to metabolize effectively. If your dog eats chocolate, you should contact your veterinarian as soon as possible for advice and monitor them closely.',
    tips: ''
  },
  {
    name: 'Almonds',
    canEat: 'No',
    level: 'Harmful',
    description:
      "Almonds can pose potential health problems for dogs and should be avoided. The canine's system does not properly digest the proteins in nuts and lon-term consumption can result in long-term health concerns. Eating large quantities of almonds, whether all at once or frequent smaller amounts given regularly, can cause gastrointestinal distress, obesity, and pancreatitis. If your dog eats more than a few almonds contact your veterinarian for advice and monitor them closely.",
    tips: ''
  },
  {
    name: 'Almond Milk',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A moderate amount of almond milk is safe for your dog but allowing your dog to regularly drink almond milk is unnecessary and doesn't provide much or even any health benefits. Only feed your dog plain, unsweetened almond milk without added sugar and/or artificial ingredients. Also check the ingredient list for xylitol which is deadly to dogs.",
    tips: 'Watch out for xylitol, use only plain, unsweetened almond milk, without additives'
  },
  {
    name: 'Almond Butter',
    canEat: 'No',
    level: 'Harmful',
    description:
      "Almond butter just like almonds can pose potential health problems for dogs and should be avoided. The canine's system does not properly digest the proteins in nuts and long-term consumption can result in long-term health concern. Eating large quantities of almond butter, whether all at once or frequent smaller amounts given regularly, can cause gastrointestinal distress, obesity, and pancreatitis.",
    tips: ''
  },
  {
    name: 'Almond Flour',
    canEat: 'No',
    level: 'Harmful',
    description:
      "Like almonds, almond flour can pose potential health problems for dogs and should be avoided. While almond flour isn't toxic, if your dog eats too much, it can cause stomach issues. There's no benefit associated with feeding almond flour to your dog.",
    tips: ''
  },
  {
    name: 'Xylitol',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Xylitol is extremely toxic to dogs. Even small amounts of xylitol can cause hypoglycemia (low blood sugar), seizures, liver failure or even death in dogs. Many foods labeled as sugar-free contain xylitol but this artificial sweetener is a sugar alcohol that can be deadly for your dog.',
    tips: ''
  },
  {
    name: 'Grapes',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Grapes are extremely harmful or even fatal to dogs. Though some dogs aren't seriously affected, reactions are entirely unpredictable. Just a few grapes can cause severe complications like rapid loss of kidney function and acute renal failure. If your dog ate some grapes immediately go to a veterinarian.",
    tips: ''
  },
  {
    name: 'Raisins',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Raisins are extremely harmful or even fatal to dogs. Though some dogs aren't seriously affected, reactions are entirely unpredictable. Just a few raisins can cause severe complications like rapid loss of kidney function and acute renal failure. If your dog ate some raisins immediately go to a veterinarian.",
    tips: ''
  },
  {
    name: 'Currants',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Currants are extremely harmful or even fatal to dogs. Though some dogs aren't seriously affected, reactions are entirely unpredictable. Just a few currants can cause severe complications like rapid loss of kidney function and acute renal failure. If your dog ate some currants immediately go to a veterinarian.",
    tips: ''
  },
  {
    name: 'Bread dough',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Raw bread dough that is made with yeast can be dangerous for dogs. After consumption the yeast in the dough continues to make the dough rise, distending the stomach and releasing toxic levels of ethanol into your dog's bloodstream. If your dog consumed bread dough, call your veterinarian immediately and look out for symptoms of alcohol toxicosis.",
    tips: ''
  },
  {
    name: 'Sesame Seeds',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small amount of sesame seeds won't harm your dog. Sprinklings of sesame seeds make for an excellent addition to meals just as long as you limit your dog's portions. Dogs should not be allowed to consume seeds found inside fruit.",
    tips: 'Limit portions'
  },
  {
    name: 'Cooked Bones',
    canEat: 'No',
    level: 'Harmful',
    description:
      'Cooked bones should not be given to your dog. They become brittle and easily break into sharp shards that can do a lot of damage when they pass through the gastrointestinal tract.',
    tips: ''
  },
  {
    name: 'Alcohol',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Alcohol is toxic to dogs. If your dog consumed alcohol, call your veterinarian immediately and look out for symptoms of alcohol toxicosis.',
    tips: ''
  },
  {
    name: 'Ethanol',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Ethanol is toxic to dogs. If your dog consumed ethanol, call your veterinarian immediately and look out for symptoms of alcohol toxicosis.',
    tips: ''
  },
  {
    name: 'Mushrooms',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'Store brought mushrooms are generally safe for dogs to eat. However, mushrooms can cause negative reactions, including gastrointestinal issues or diarrhea. If your dog ingests a wild mushroom, you should immediately contact your veterinarian or your emergency veterinary hospital.',
    tips: 'Only store brought, no wild mushrooms, modest amount'
  },
  {
    name: 'Nutmeg',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Nutmeg is toxic to pets due to a compound in the nutmeg called Myristicin. Nutmeg could severely affect your pet's nervous system, cause seizures and even cause death. Contact your veterinarian or your emergency veterinary hospital if your dog has ingested nutmeg.",
    tips: ''
  },
  {
    name: 'Cinnamon',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small amount of cinnamon won't harm your dog. However, cinnamon is not a essential part of a dog's natural diet and should not be added as a daily supplement. Moreover, a large amount can irritate your dog's mouth and also, lower their blood sugar. If that happens, it can lead to vomiting, liver disease, heart rate fluctuations and diarrhea.",
    tips: ''
  },
  {
    name: 'Potatoes',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "You can feed your dog on occasion potatoes in moderation, if you cook them first. Cooked potatoes are nutritious, containing vitamin C, vitamin B6 and iron. Raw and green potatoes are toxic for dogs due to a glycoalkaloid poison called solanine which can affect your dog's nervous system. Unfortunately, this naturally-occurring chemical can be toxic. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'Only cooked, modest potato portions'
  },
  {
    name: 'Onions',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Onions are not safe for dogs, it is of upmost importance to avoid feeding your dog onions in any form (cooked, raw, powder, juice, etc). Onions contain compounds called disulfides and thiosulphates which can be toxic to cats and dogs if ingested. They can cause anemia like Hemolytic Anemia which can be fatal. Moreover thiosulphates can destroy red blood cells which will hinder the delivery of oxygen to the organs. The effect might not be visible right away, days could go by before the first symptoms show up. While a tiny amount may not end up being harmful, it is best to play it safe and keep onions off limits. Contact your veterinarian or your emergency veterinary hospital if your dog has ingested onions.',
    tips: ''
  },
  {
    name: 'Garlic',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Garlic fed sparingly in small portions to a full-grown dog is relatively safe. Do not feed garlic to puppies or anemic dogs. Also avoid feeding garlic prior to a surgery. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'Small amount, lookout for allergic reactions'
  },
  {
    name: 'Chives',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Chives, like onions, are not safe for dogs. It is of upmost importance to avoid feeding your dog chives in any form (cooked, raw, powder, juice, etc). While a tiny amount may not end up being harmful, it is best to play it safe and keep chives off limits. Contact your veterinarian or your emergency veterinary hospital if your dog has ingested chives.',
    tips: ''
  },
  {
    name: 'Macadamia nuts',
    canEat: 'No',
    level: 'Toxic',
    description:
      'Macadamia nuts are toxic to dogs and macadamia poisoning can be quite serious. Some of the effects are very similar to an allergic reaction. In addition, your dog may seem weak, they could become lethargic, vomit, have stomach pains or develop a fever. Macadamia nuts can also cause joint pain, ataxia (loss of coordination) or tremors. In any case, a veterinarian visit is highly recommended regardless of how many were eaten.',
    tips: ''
  },
  {
    name: 'Pecans',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Pecans are not safe for dogs and are considered to be toxic. If your dog happens to eat a small amount of pecans, it's likely nothing to worry about. But pecans are definitely not safe to offer your dog as a treat because these particular nuts contain a toxin known as juglone, which can be harmful to them especially in large amounts. Pecans can also cause mild stomach upset and gastrointestinal obstruction in dogs. It is highly recommended to contact your veterinarian regardless of how many pecans were eaten.",
    tips: ''
  },
  {
    name: 'Pistachios',
    canEat: 'No',
    level: 'Harmful',
    description:
      'Although properly processed pistachios are not directly toxic to dogs they are not recommended. Eaten in large quantities pistachios can cause gastrointestinal distress, obesity, and pancreatitis. This can occur in dogs if the pistachios are eaten all at once or in smaller but more frequent amounts. The canine system is not designed to process nuts and they ultimately cause gastrointestinal distress, obesity, and pancreatitis.',
    tips: ''
  },
  {
    name: 'Walnuts',
    canEat: 'No',
    level: 'Toxic',
    description:
      "Walnuts are not safe for dogs and are considered to be toxic. If your dog happens to eat a small amount of walnuts, it's likely nothing to worry about. But walnuts are definitely not safe to offer your dog as a treat because these particular nuts contain a toxin known as juglone, which can be harmful to them especially in large amounts. Walnuts can also cause mild stomach upset and gastrointestinal obstruction in dogs. It is highly recommended to contact your veterinarian regardless of how much walnuts were eaten.",
    tips: ''
  },
  {
    name: 'Peanuts',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Feeding a few unsalted peanuts won't be harmful to your dog. Peanuts are an excellent protein source and provide niacin, and vitamins B and E. However, peanuts also contain high levels of fat which can cause digestive upset and even pancreatitis if your dog eats high-fat foods like peanuts on a regular basis or in large quantities. When it comes to feeding peanuts, moderation is key. Limit your dog's peanut intake to just a few peanuts, and do not feed peanuts as a treat every day.",
    tips: 'Moderate amounts, unsalted, dry roasted or raw peanuts'
  },
  {
    name: 'Peanut butter',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Feeding a small amount of unsalted peanut butter won't be harmful to your dog. Make sure to only feed them plain, unsalted peanut butter, without additives like xylitol. It's best consumed in moderation, while you should ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Watch out for xylitol, provide only plain, unsalted peanut butter, without additives.'
  },
  {
    name: 'Cashews',
    canEat: 'No',
    level: 'Harmful',
    description:
      "Feeding a few cashews won't be harmful to dogs but they are not recommended. Too much consumption may cause significant weight gain and even make you pet prone to osteoporosis and pancreatitis. This can occur in dogs if the cashews are eaten all at once or in smaller but more frequent amounts. The canine system is not designed to process nuts and they ultimately cause gastrointestinal distress, obesity, and pancreatitis.",
    tips: ''
  },
  {
    name: 'Sugar',
    canEat: 'No',
    level: 'Harmful',
    description:
      "You shouldn't feed your dog any sugar products. Added sugar can cause diabetes and weight gain in your dog.",
    tips: ''
  },
  {
    name: 'Bread',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Feeding your dog bread is safe but only feed them a limited amount. Regularly sharing slices with your dog would introduce too many carbohydrates. Moreover, bread won't provide your dog with any meaningful nutrition.",
    tips: 'Avoid feeding on regular basis, limit amount'
  },
  {
    name: 'Ham',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Your dog can eat ham in moderation. It's not harmful for your dog, but it does contain large amounts of sodium, which can cause your dog to retain fluid and become thirsty. It's fine to give your dog a few pieces as treats occasionally.",
    tips: 'Limit amount'
  },
  {
    name: 'Bacon',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Your dog can eat bacon in moderation. It's not harmful for your dog, but it does contain a large amount of fat which could eventually cause pancreatitis. It's fine to give your dog a few pieces as treats occasionally but feeding it over the long term is unhealthy.",
    tips: 'Limit amount, best avoid'
  },
  {
    name: 'Sausages',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Your dog can eat sausages in moderation. They're not harmful for your dog, but they contain a large amount of sodium and fat which are harmful when consumed in large amounts or for a prolonged time.",
    tips: 'Limit amount, best avoid'
  },
  {
    name: 'Milk',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'Like all dairy products, milk contains lactose, which dogs have trouble digesting. You can give your dog a little milk but watch for digestive problems or bloating.',
    tips: 'Limit amount'
  },
  {
    name: 'Cheese',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Most dogs enjoy small pieces of cheese as treats. Just make sure your dog isn't lactose intolerant before feeding them cheese. If you do decide to give your dog cheese, feed them low fat, low sodium cheese like mozzarella or cottage cheese. Camembert, Brie, Blue Cheese, and all other moldy varieties as well as anything else enriched with cream should be off limits to your dog.",
    tips: 'Small amount, plain, low-fat, low sodium varieties'
  },
  {
    name: 'Yogurt',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Like any dairy product, your dog might have trouble digesting yogurt, but each dog is different. Yogurt builds up the good bacteria in your dog's digestive system. Always feed them unsweetened, plain yogurt, if your dog tolerates dairy foods.",
    tips: 'In moderation, unsweetened, plain yogurt'
  },
  {
    name: 'Honey',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Honey fed sparingly in small portions to a full-grown dog is relatively safe. Pure honey, without fructose corn syrup, aids digestion, reduces allergies and boosts energy. However, keep in mind that honey does contain natural sugars, so it's best fed in limited amounts.",
    tips:
      'Avoid feeding raw honey to young puppies or dogs with compromised immune systems, as it can cause allergies or be harmful to their health'
  },
  {
    name: 'Eggs',
    canEat: 'Yes',
    level: 'Yes',
    description:
      'Eggs are safe for dogs to consume and contain plenty of vitamins and minerals as well as proteins which are absolutely beneficial for dogs. Cooked eggs also soothe upset stomachs. Animals in poor health or those with weakened immune systems should not be fed raw eggs because any sort of contamination could cause complications.',
    tips: 'Avoid raw eggs, few servings per week'
  },
  {
    name: 'Eggplants',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Eggplants in moderation are fine for most dogs and if your dog is not allergic they could benefit from the vitamins and minerals. Being low in fat and calories makes it an attractive treat. Dogs with kidney problems should not get to partake in eggplant due to the oxalates. Be sure to speak with your veterinarian before adding eggplant to your dog's diet, give them only a small amount of eggplant and watch for any negative reactions.",
    tips: 'Small amounts, cooked eggplants'
  },
  {
    name: 'Aubergines',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Aubergines in moderation are fine for most dogs and if your dog is not allergic they could benefit from the vitamins and minerals. Being low in fat and calories makes it an attractive treat. Dogs with kidney problems should not get to partake in aubergine due to the oxalates. Be sure to speak with your veterinarian before adding aubergine to your dog's diet, give them only a small amount of aubergine and watch for any negative reactions.",
    tips: 'Small amounts, cooked aubergines'
  },
  {
    name: 'Fish',
    canEat: 'Yes',
    level: 'Yes',
    description:
      'Fish is absolutely safe for dogs. With many vitamins and minerals as well as quality protein, the nutrition is off the charts. Two of the most beneficial fish for dogs are sardines and salmon. Simply take some basic precautions which, to be totally safe, include passing on a couple of fish species and removing bones when necessary.',
    tips: ''
  },
  {
    name: 'Salmon',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Salmon is safe for dogs as long as it is not uncooked or under-cooked. Make sure the fish meat does not contain any bones because they can get stuck in the throat or further down your dog's digestive system. It's recommended to not overfeed your dog, and ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Properly cooked'
  },
  {
    name: 'Sardines',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Sardines are absolutely safe for dogs and an excellent meal supplement for dogs. They're full of vitamins, nutrition like Omega-3 and protein, and the soft, tiny bones in sardines add calcium. Sardines are excellent for the immune system and may reduce inflammation particularly when joint pain is an issue. However, be sure to remove any potentially dangerous bones. It's recommended to not overfeed your dog, and ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Avoid the brine or oil tinned sardines, watch out for small hard bones'
  },
  {
    name: 'Tuna',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Tuna is safe for dogs and an excellent meal supplement for dogs. It is full of vitamins, nutrition like Omega-3 and protein. However, be sure to remove any potentially dangerous bones. It's recommended to not overfeed your dog, and ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: 'Avoid the brine or oil tinned tuna'
  },
  {
    name: 'Shrimps',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Cooked fresh shrimps are a good treat for your dog. Shrimps are low in fat, calories and carbs and a good source of antioxidants, phosphorous and B-12. When feeding shrimps make sure to completely remove the shell including tails, heads and legs. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'Avoid raw, remove the shell'
  },
  {
    name: 'Prawns',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Cooked fresh prawns are a good treat for your dog. Prawns are low in fat, calories and carbs and a good source of antioxidants, phosphorous and B-12. When feeding prawns make sure to completely remove the shell including tails, heads and legs. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'Avoid raw, remove the shell'
  },
  {
    name: 'Lobster',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Cooked fresh lobster is a good treat for your dog. Lobster is low in fat, calories and carbs and a good source of antioxidants, phosphorous and B-12. When feeding lobster make sure to completely remove the shell including the tail, head and legs. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'Avoid raw, remove the shell'
  },
  {
    name: 'Crab',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Cooked fresh crab is a good treat for your dog. Crab is low in fat, calories and carbs and a good source of antioxidants, phosphorous and B-12. When feeding Crab make sure to completely remove the shell. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'Avoid raw, remove the shell'
  },
  {
    name: 'Meats',
    canEat: 'Yes',
    level: 'Yes',
    description:
      'Eating meat is very natural for dogs. Dogs can be fed any type of meat and organs. Chicken, beef, lamb, turkey and most other animals are fine for dogs. Pieces of uncooked steaks and other types of beef straight from the butcher tend to provide the most valuable protein but avoid uncooked fish and pork.',
    tips: ''
  },
  {
    name: 'Tofu',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "This plant-based protein and energy source is safe for your dog to eat, but watch out for any allergic reactions. Some dogs don't tolerate soy very well. The fact is animal-based nutrients are what dogs require to thrive. It's recommended to ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: ''
  },
  {
    name: 'Soy',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "This plant-based protein and energy source is safe for your dog to eat, but watch out for any allergic reactions. Some dogs don't tolerate soy very well. The fact is animal-based nutrients are what dogs require to thrive. It's recommended to ask your veterinarian about appropriate serving sizes for your individual dog.",
    tips: ''
  },
  {
    name: 'Corn',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Corn is not toxic for dogs and small amounts of corn won't harm your dog, but regularly feeding them corn is sort of unhealthy and unnecessary. Corn on the cob can cause a serious intestinal blockage if your dog manages to get one down their throat.",
    tips: 'Avoid regularly feeding corn to your dog'
  },
  {
    name: 'Maize',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Maize is not toxic for dogs and small amounts of maize won't harm your dog, but regularly feeding it is sort of unhealthy and unnecessary.",
    tips: 'Avoid regularly feeding maize to your dog'
  },
  {
    name: 'Rice',
    canEat: 'Yes',
    level: 'Yes',
    description:
      'Cooked quality rice is safe to feed to your dog. In fact, rice is actually most useful for nursing a sick puppy back to health or in place of wheat for dogs with wheat allergies. Get brown or wild rice instead of the plain white kind. Your dog will get lots of fiber and minerals.Besides, white rice has more of a negative effect on blood sugar levels than other varieties.',
    tips: 'Quality rice, avoid white rice'
  },
  {
    name: 'Oats',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Cooked oats are safe for your dog to eat. Being high in fiber, iron and vitamin B-6, dogs can also benefit nutritionally. Oats tend to improve digestive function and can soothe an upset stomach. However oats should complement, not replace your dog's regular meals. Avoid anything that's prepackaged since they typically have tons of preservatives and other additives like artificial fruits or flavorings.",
    tips: 'Plain and organic cooked oats with no additives'
  },
  {
    name: 'Oatmeal',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Oatmeal is safe for your dog to eat. Being high in fiber, iron and vitamin B-6, dogs can also benefit nutritionally. Oatmeal tends to improve digestive function and can soothe an upset stomach. However oatmeal should complement, not replace your dog's regular meals. Avoid anything that's prepackaged since they typically have tons of preservatives and other additive like artificial fruits or flavorings.",
    tips: 'Plain and organic cooked oatmeal with no additives'
  },
  {
    name: 'Popcorn',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small amount of plain popcorn is fine for your dog, as long as it's not salted or buttered. Popcorn comes from corn which generally isn't great for dogs. A small amount only occasionally is fine, but there are several other factors to consider if you're feeding it on the regular. Try to avoid giving your dog unpopped kernels that could cause choking.",
    tips: 'Limit portions, not salted and buttered'
  },
  {
    name: 'Quinoa',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Quinoa is safe for dogs and a great snack considering that quinoa is a gluten-free seed with high levels of essential amino acids. Quinoa is an alternative to corn, soy and wheat that sometimes cause food allergies in dogs. Introduce small amounts, if your dog hasn't eaten quinoa before to make sure they can digest it properly. It's a good source of protein, calcium and fiber, yet it can't replace meat-based protein in quality dog food.",
    tips: 'Small amounts, washed and cooked'
  },
  {
    name: 'Asparagus',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Asparagus is safe for dogs to eat. You can feed asparagus lightly cooked or raw to ensure your dog will get the rich nutrients. As in humans, asparagus consumption can give your dog's urine an unpleasant odor and cause flatulence.",
    tips: 'Cut in small pieces'
  },
  {
    name: 'Spinach',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Spinach is safe for dogs to eat. A moderate amount of spinach can benefit your dog but keep in mind that the canine digestive system generally doesn't process leafy greens as well as the human digestive system.",
    tips: 'Limit portion, chop and cook before feeding'
  },
  {
    name: 'Cucumbers',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Cucumbers are safe for dogs to eat and an amazing snack for dogs. They are low in calories and high in vitamins and nutrients. Plus they are naturally full of water. So a few fresh slices would be a fantastic treat. Though your dog is mostly carnivorous by nature, cucumbers are recommended as an occasional snack. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards.",
    tips: 'Not pickled, slice or chop up the cucumber'
  },
  {
    name: 'Pickles',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Pickles aren't toxic, but frequent canine consumption of salty snacks is simply not smart. Never let your dog drink the salty brine liquid.",
    tips: 'Best avoided, no pickle juice'
  },
  {
    name: 'Celery',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Celery is safe and a healthy treat for your dog even though it doesn't add much nutritional value to your dog's diet. Cut up a modest amount into small pieces and remove the stringy parts.",
    tips: 'Cut into small pieces, remove the stringy parts'
  },
  {
    name: 'Zucchini',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Zucchini is safe and a healthy low-calorie treat for your dog. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards.",
    tips: 'Cut into small pieces'
  },
  {
    name: 'Green peas',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Peas are not harmful to dogs and can be safely eaten. Adding peas to your dog's diet or feeding them as healthy treats is fine. They're rich in vitamin A, vitamin K and B vitamins, as well as minerals, iron, zinc, potassium and magnesium.",
    tips: ''
  },
  {
    name: 'Tomatoes',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "It's okay for your dog to eat tomatoes, but make sure they're completely ripe and remove the stems. Green tomatoes, as well as the leaves and stems contain solanine, which can cause muscle weakness, seizures and digestive upset. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'In moderation, ripened tomatoes'
  },
  {
    name: 'Bell peppers',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Bell peppers can safely be consumed by dogs and are an excellent idea for rewarding a pet dog. They contain vitamin A, which is great for your dog's vision, as well as vitamin C, vitamin E and vitamin B6. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards and report any vomiting, diarrhea or signs of abdominal discomfort to your veterinarian.",
    tips: 'In moderation, non-spicy'
  },
  {
    name: 'Green beans',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Green beans are safe for dogs to eat, as long as they are plain. With the beneficial nutrients of vitamin K and vitamin C, as well as minerals, adding green beans to your dog's diet is a good idea. These veggies are a good low-calorie food for overweight dogs.",
    tips: ''
  },
  {
    name: 'Pumpkins',
    canEat: 'Yes',
    level: 'Yes',
    description:
      'Pumpkins are safe for dogs to eat, as long as they are plain without any added seasonings. They offer your dog a food source rich in fiber and vitamin A. Pumpkin helps aid digestion, if your dog suffers from diarrhea or canine constipation.',
    tips: ''
  },
  {
    name: 'Sweet potatoes',
    canEat: 'Yes',
    level: 'Yes',
    description:
      "Sweet potato is a safe, healthy, and natural treat for dogs, offering a range of health benefits. This grain-free carbohydrate is nutritious for your dog. It's full of vitamin C, fiber, antioxidants and potassium. When feeding sweet potatoes to your dog, it's best to be cooked and peeled.",
    tips: 'Cooked, remove skin'
  },
  {
    name: 'Carrots',
    canEat: 'Yes',
    level: 'Yes',
    description:
      'Carrots make a great and healthy snack for your dog. Carrots are low-calorie and provide iron, potassium, minerals and multiple vitamins which make them the perfect treat. Much like pumpkin, carrots have an amazing ability to alleviate bowel irregularity.',
    tips: 'Shred or cut into small pieces'
  },
  {
    name: 'Broccoli',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Broccoli in moderated amounts is safe for dogs. You can add broccoli to your dog's food for added protein, calcium, vitamin E, fiber and minerals. Serve your dog plain broccoli, either lightly cooked or raw, and don't get carried away.",
    tips: 'In moderation'
  },
  {
    name: 'Cauliflower',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Cauliflower in moderated amounts is safe for dogs. You can add cauliflower to your dog's food for added protein, calcium, vitamin E, fiber and minerals. Serve your dog plain cauliflower, either lightly cooked or raw, and don't get carried away.",
    tips: 'In moderation'
  },
  {
    name: 'Artichokes',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Artichokes in moderated amounts are safe for dogs. The biggest danger is a potential for a digestive tract blockage. For that reason, artichokes must be prepared for your dog in easy-to-consume portions. Feed your dog raw plain artichoke cut up into small pieces and with no added ingredients. Because every animal's tolerance for specific foods is a bit different and sensitivity varies from pet to pet make sure to monitor your dog afterwards.",
    tips: 'Remove the outer leaves, cut up into easily digestible pieces'
  },
  {
    name: 'Cabbage',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Cabbage in moderated amounts is safe for dogs. You can add cabbage to your dog's food for added protein, calcium, vitamin E, fiber and minerals. Serve your dog plain cabbage, either lightly cooked or cooked because there is evidence raw cabbage affects the thyroid gland. Feed your dog only moderate amount of cabbage and be aware that consumption can cause flatulence.",
    tips: 'In moderation, not raw'
  },
  {
    name: 'Peaches',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Peach slices make a delicious, healthy snack for your dog. However, the core of the peach and the peach seed especially can be harmful to dogs. Peach seeds contain a small amount of cyanide which is released when they're broken or chewed. So it's best to remove them and avoid the risk. Peaches adds vitamin A and fiber to your dog's diet. As with all fruit, limit quantities to avoid digestion problems, and remove the peach pit before feeding.",
    tips:
      'Cut up into easily digestible slices, remove the seeds, stem and core and only feed a modest amount'
  },
  {
    name: 'Plums',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "Plums slices make a delicious, healthy snack for your dog. However, the core of the plum and the plum seed especially can be harmful to dogs. Plum seeds contain a small amount of cyanide which is released when they're broken or chewed. So it's best to remove them and avoid the risk. Plums, although health, contain high sugar and should be restricted as a special treat only.",
    tips:
      'Cut up into easily digestible slices, remove the seeds, stem and core and only feed a modest amount'
  },
  {
    name: 'Pineapple',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'A small portion of pineapple is generally safe for dogs. This citrus fruit is rich in vitamin C and antioxidants, making it a healthy occasional treat for your dog.',
    tips: 'Limit amounts, peeled'
  },
  {
    name: 'Mango',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'A small portion of mango is generally safe for dogs. A juicy mango has vitamin A, B6, vitamin C, E as well as fiber and potassium, making it a healthy occasional treat for your dog.',
    tips: 'Limit amounts, remove skin and seed'
  },
  {
    name: 'Chickpeas',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small portion of plain cooked chickpeas can be consumed by dogs. However don't make them a substantial part of your dog's diet. Hummus, and other foods incorporating chickpeas, are more risky due to various other added ingredients.",
    tips: 'Limit amounts, only plain cooked chickpeas '
  },
  {
    name: 'Lentils',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small portion of plain cooked lentils can be consumed by dogs. They are a great source of protein, zinc, iron and fiber. However don't make them a substantial part of your dog's diet and be aware that consumption can cause flatulence.",
    tips: 'Limit amounts, only plain cooked lentils'
  },
  {
    name: 'Beans',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small portion of plain cooked beans can be consumed by dogs. They are a great source of protein, zinc, iron and fiber. However don't make them a substantial part of your dog's diet and be aware that consumption can cause flatulence.",
    tips: 'Limit amounts, only plain soaked and cooked beans'
  },
  {
    name: 'Ginger',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small amount of ginger can be consumed by dogs and can certainly be beneficial. Ginger not only offers numerous vitamins and minerals, but it's also great for reducing nausea and stomachaches. It can even help your dog better deal with arthritic-related aches and pains. But while healthy, limit consumption to moderate amounts.",
    tips: 'Limit amounts'
  },
  {
    name: 'Basil',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'A small amount of basil is not harmful for dogs. In fact, it is super healthy and there are even medicinal uses. Nevertheless, be conservative with this herb. While rare, dogs can be allergic to basil.',
    tips: 'Limit amounts'
  },
  {
    name: 'Oregano',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'A small amount of oregano is not harmful for dogs. In fact, in small amount it is healthy and there are even medicinal uses. Nevertheless, be conservative with this herb because it can potentially cause gastrointestinal irritation like diarrhea and vomiting.',
    tips: 'Limit amounts'
  },
  {
    name: 'Parsley',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'A small amount of parsley is not harmful for dogs. In fact, in small amount it is healthy and there are even medicinal uses. Nevertheless, be conservative with this herb because it can potentially cause gastrointestinal irritation like diarrhea and vomiting. Pregnant dogs, or those with kidney dysfunction, should not be fed any parsley',
    tips: 'Limit amounts'
  },
  {
    name: 'Turmeric',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      'A small amount of turmeric is not harmful for dogs. Turmeric may help to ward off cancer, dementia and improve irritable bowel problems.',
    tips: 'Limit amounts'
  },
  {
    name: 'Chamomile',
    canEat: 'Yes',
    level: 'In Moderation',
    description:
      "A small amount of chamomile is not harmful for dogs. Chamomile tends to calm the digestive system and relieve spasms and gas. This tea may help to alleviate your dog's belly ache.",
    tips: 'Limit amounts'
  }
];

export default foodList;
