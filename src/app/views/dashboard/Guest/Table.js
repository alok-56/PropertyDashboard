import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
  TextField,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import { useState } from 'react';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const GuestTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ width: '98%', display: 'flex', marginLeft: 15, marginTop: 10 }}>
      <Card elevation={20} sx={{ pt: '20px', mb: 3 }}>
        <CardHeader>
          <Title>Booking List</Title>
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ textTransform: 'uppercase' }}
            onClick={handleOpenModal}
          >
            Add Booking
          </Button>
        </CardHeader>

        <Box overflow="auto">
          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Add Product</DialogTitle>
            <DialogContent>
              {/* Add your form fields for adding a new product here */}
              <TextField
                autoFocus
                margin="dense"
                label="Product Name"
                type="text"
                fullWidth
                // Add any additional properties or handlers as needed
              />
              <TextField
                margin="dense"
                label="Price"
                type="number"
                fullWidth
                // Add any additional properties or handlers as needed
              />
              <TextField
                margin="dense"
                label="Availability"
                type="number"
                fullWidth
                // Add any additional properties or handlers as needed
              />
              {/* Add any additional input fields as needed */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCloseModal} color="primary" variant="contained">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        <Box overflow="auto">
          <ProductTable>
            <TableHead>
              <TableRow>
                <TableCell sx={{ px: 3 }} colSpan={4}>
                  Name
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  Revenue
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={2}>
                  Stock Status
                </TableCell>
                <TableCell sx={{ px: 0 }} colSpan={1}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productList.map((product, index) => (
                <TableRow key={index} hover>
                  <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Box display="flex" alignItems="center">
                      <Avatar src={product.imgUrl} />
                      <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                    </Box>
                  </TableCell>

                  <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    ${product.price > 999 ? (product.price / 1000).toFixed(1) + 'k' : product.price}
                  </TableCell>

                  <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                    {product.available ? (
                      product.available < 20 ? (
                        <Small bgcolor={bgSecondary}>{product.available} available</Small>
                      ) : (
                        <Small bgcolor={bgPrimary}>in stock</Small>
                      )
                    ) : (
                      <Small bgcolor={bgError}>out of stock</Small>
                    )}
                  </TableCell>

                  <TableCell sx={{ px: 0 }} colSpan={1}>
                    <IconButton>
                      <Icon color="primary">edit</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ProductTable>
        </Box>
      </Card>
    </div>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/products/headphone-2.jpg',
    name: 'earphone',
    price: 100,
    available: 15,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'earphone',
    price: 1500,
    available: 30,
  },
  {
    imgUrl: '/assets/images/products/iphone-2.jpg',
    name: 'iPhone x',
    price: 1900,
    available: 35,
  },
  {
    imgUrl: '/assets/images/products/iphone-1.jpg',
    name: 'iPhone x',
    price: 100,
    available: 0,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Head phone',
    price: 1190,
    available: 5,
  },
];

export default GuestTable;
