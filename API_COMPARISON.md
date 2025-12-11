# API Comparison: Express vs Laravel

## Authentication Endpoints

### Register User
**Express (Old):**
```typescript
// Not implemented in original
```

**Laravel (New):**
```bash
POST /api/register
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

### Login User
**Express (Old):**
```typescript
// Using Passport local strategy
```

**Laravel (New):**
```bash
POST /api/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

### Get Current User
**Laravel:**
```bash
GET /api/user
```

### Logout
**Laravel:**
```bash
POST /api/logout
```

## Certificate Endpoints

### Get All Certificates
**Express (Old):**
```typescript
storage.getCertificates() // In-memory
```

**Laravel (New):**
```bash
GET /api/certificates
```

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Certificate Title",
    "issuer": "Issuer Name",
    "date": "2024-01-01",
    "category": "Category",
    "description": "Description",
    "certificate_id": "CERT-123",
    "created_at": "2024-01-01T00:00:00.000000Z",
    "updated_at": "2024-01-01T00:00:00.000000Z"
  }
]
```

### Create Certificate
**Laravel:**
```bash
POST /api/certificates
Content-Type: application/json

{
  "title": "Certificate Title",
  "issuer": "Issuer Name",
  "date": "2024-01-01",
  "category": "Category",
  "description": "Optional description",
  "certificate_id": "CERT-123"
}
```

### Get Single Certificate
**Laravel:**
```bash
GET /api/certificates/{id}
```

### Update Certificate
**Laravel:**
```bash
PUT /api/certificates/{id}
Content-Type: application/json

{
  "title": "Updated Title",
  "issuer": "Updated Issuer"
}
```

### Delete Certificate
**Laravel:**
```bash
DELETE /api/certificates/{id}
```

## Storage Comparison

### Express (Old)
```typescript
// In-memory storage
class MemStorage implements IStorage {
  private users: Map<string, User>;
  // Data lost on restart
}
```

### Laravel (New)
```php
// PostgreSQL database with Eloquent ORM
Certificate::all();
Certificate::create($data);
Certificate::find($id);
Certificate::update($data);
Certificate::delete();
// Data persisted in database
```

## Validation Comparison

### Express (Old)
```typescript
// Using Zod
const insertCertificateSchema = createInsertSchema(certificates).omit({
  id: true,
});
```

### Laravel (New)
```php
// Built-in validation
$validated = $request->validate([
    'title' => 'required|string',
    'issuer' => 'required|string',
    'date' => 'required|string',
    'category' => 'required|string',
    'description' => 'nullable|string',
    'certificate_id' => 'nullable|string',
]);
```

## Testing the API

### Using cURL

**Create a user:**
```bash
curl -X POST http://localhost:8000/api/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

**Create a certificate:**
```bash
curl -X POST http://localhost:8000/api/certificates \
  -H "Content-Type: application/json" \
  -d '{
    "title":"Web Development Certificate",
    "issuer":"FreeCodeCamp",
    "date":"2024-01-15",
    "category":"Web Development",
    "description":"Completed full course",
    "certificate_id":"FCC-WD-2024"
  }'
```

**Get all certificates:**
```bash
curl http://localhost:8000/api/certificates
```
