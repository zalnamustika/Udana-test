**Installation and Setup**
1. Clone repository dari Github
2. Jalankan 'composer install'
3. Setup 'cp env.example .env'
4. Jalankan 'php artisan key:genarate'
5. ubah nama database di '.env'
6. Jalankan 'php artisan migrate'
7. Jalankan 'php artisan migrate:fresh --seed'
8. Jalankan 'php artisan jwt:secret'
   
**Endpoint**
1. Create
   - Login
     URL : http://localhost:8000/api/login <br>
     Method : POST
     ![login](https://github.com/user-attachments/assets/8e564338-5dd0-4e4e-beb8-ce829dcfdc6f)

   - Tambah Data
     URL : http://localhost:8000/api/tasks <br>
     Method : POST
     ![headers](https://github.com/user-attachments/assets/0a40eead-99da-4ee8-b81f-3fc10fa93439)
     ![create data](https://github.com/user-attachments/assets/f8726fa6-88b9-499f-adf7-d6d65cadc077)

2. Show
   URL : http://localhost:8000/api/tasks <br>
   Method : GET
   ![headers](https://github.com/user-attachments/assets/0a40eead-99da-4ee8-b81f-3fc10fa93439)
   ![show data](https://github.com/user-attachments/assets/e051d9e5-8463-4185-9329-a700c2fa77ac)

4. Show 1 Data
   URL : http://localhost:8000/api/tasks/{id} <br>
   Method : PUT
   ![headers](https://github.com/user-attachments/assets/0a40eead-99da-4ee8-b81f-3fc10fa93439)
   ![show 1 data](https://github.com/user-attachments/assets/56056bee-371c-4ca6-bc19-73a6c6fcd679)

6. Update
   URL : http://localhost:8000/api/tasks/{id} <br>
   Method : PUT
   ![headers](https://github.com/user-attachments/assets/0a40eead-99da-4ee8-b81f-3fc10fa93439)
   ![update data](https://github.com/user-attachments/assets/0a21b920-b6f5-4fcc-ba17-63bd3101e5a0)

7. Delete
   URL : http://localhost:8000/api/tasks/{id} <br>
   Method : DELETE
   ![headers](https://github.com/user-attachments/assets/0a40eead-99da-4ee8-b81f-3fc10fa93439)
   ![delete data](https://github.com/user-attachments/assets/33360467-8217-4b7e-aa08-513d091847a8)





